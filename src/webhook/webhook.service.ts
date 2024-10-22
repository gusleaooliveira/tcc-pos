import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { PlanService } from 'src/plan/plan.service';
import { SendEmailService } from 'src/send-email/send-email.service';
import { UserPlanStatusService } from 'src/user-plan-status/user-plan-status.service';
import { UserService } from 'src/user/user.service';
import Stripe from 'stripe';

@Injectable()
export class WebhookService {
  private readonly stripe: Stripe;
  private readonly logger = new Logger(WebhookService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly planService: PlanService,
    private readonly userPlanStatusService: UserPlanStatusService,
    private readonly sendEmailService: SendEmailService,
    private readonly authService: AuthService
  ) {
    this.stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2024-09-30.acacia',
    });

    this.logger.log('WebhookService iniciado com sucesso');
    this.logger.debug(
      `Stripe Secret Key: ${this.configService.get('STRIPE_SECRET_KEY')}`
    );
    this.logger.debug(
      `Stripe Webhook Secret: ${this.configService.get('STRIPE_WEBHOOK_SECRET')}`
    );
  }

  async constructEvent(
    rawBody: Buffer,
    signature: string
  ): Promise<Stripe.Event> {
    const endpointSecret = this.configService.get<string>(
      'STRIPE_WEBHOOK_SECRET'
    );
    this.logger.log('Tentando construir evento Stripe');
    this.logger.debug(`Tamanho do corpo: ${rawBody.length}`);
    this.logger.debug(`Assinatura: ${signature}`);
    this.logger.debug(`Segredo do endpoint: ${endpointSecret}`);

    try {
      const event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        endpointSecret
      );
      this.logger.log(`Evento Stripe construído com sucesso: ${event.type}`);
      return event;
    } catch (err) {
      this.logger.error('Erro ao construir evento Stripe', err.message);
      throw err;
    }
  }

  async handleStripeEvent(event: Stripe.Event) {
    this.logger.log(`Processando evento ${event.type}`);

    try {
      switch (event.type) {
        case 'product.created':
        case 'product.updated':
          await this.handleProductEvent(event.data.object as Stripe.Product);
          break;
        case 'price.created':
        case 'price.updated':
          await this.handlePriceEvent(event.data.object as Stripe.Price);
          break;
        case 'product.deleted':
          await this.handleProductDeletedEvent(
            event.data.object as Stripe.Product
          );
          break;
        case 'customer.subscription.created':
          await this.handleSubscriptionCreatedEvent(
            event.data.object as Stripe.Subscription
          );
          break;
        case 'invoice.payment_succeeded':
          await this.handleInvoicePaymentSucceededEvent(
            event.data.object as Stripe.Invoice
          );
          break;
        default:
          this.logger.warn(`Evento não tratado: ${event.type}`);
      }
      this.logger.log(`Evento ${event.type} processado com sucesso`);
    } catch (error) {
      console.log(error);
      this.logger.error(
        `Erro ao processar evento ${event.type}: ${error.message}`
      );
      this.logger.debug(`Detalhes do erro: ${JSON.stringify(error, null, 2)}`);
      this.logger.debug(
        `Dados do evento: ${JSON.stringify(event.data.object, null, 2)}`
      );
    }
  }

  private async handleProductEvent(product: Stripe.Product) {
    this.logger.log(`Tratando evento de produto: ${product.id}`);
    await this.planService.createOrUpdateFromStripe(product);
    this.logger.log(`Produto tratado com sucesso: ${product.id}`);
  }

  private async handlePriceEvent(price: Stripe.Price) {
    this.logger.log(`Tratando evento de preço: ${price.id}`);
    await this.planService.updatePriceFromStripe(price);
    this.logger.log(`Preço tratado com sucesso: ${price.id}`);
  }

  private async handleProductDeletedEvent(product: Stripe.Product) {
    this.logger.log(`Produto removido: ${product.id}`);
    await this.planService.removeByStripeProductId(product.id);
    this.logger.log(`Produto deletado com sucesso: ${product.id}`);
  }

  private async handleSubscriptionCreatedEvent(
    subscription: Stripe.Subscription
  ) {
    this.logger.log(`Tratando evento de assinatura criada: ${subscription.id}`);
    const customer = await this.stripe.customers.retrieve(
      subscription.customer as string
    );
    const user = await this.userService.createUserFromWebhook(
      customer as Stripe.Customer
    );
    const plan = await this.planService.findOneByStripeProductId(
      subscription.items.data[0].price.product as string
    );
    await this.userPlanStatusService.createByWebhook(user.id, plan.id);
    this.logger.log(
      `Assinatura criada com sucesso para o usuário: ${user.email}`
    );
  }

  private async handleInvoicePaymentSucceededEvent(invoice: Stripe.Invoice) {
    this.logger.log(`Processando invoice.payment_succeeded: ${invoice.id}`);
    const subscription = await this.stripe.subscriptions.retrieve(
      invoice.subscription as string
    );

    console.log(subscription);

    const customer = await this.stripe.customers.retrieve(
      invoice.customer as string
    );

    console.log(customer);

    let user = null;
    
    user = await this.userService.findUserByStripeCustomerIdOrEmail(customer.id);

    const resetToken = await this.authService.generatePasswordResetToken(user.id);
    const resetLink = `${this.configService.get<string>('FRONTEND_URL')}/autenticacao/criar-senha?token=${resetToken}`;

    user.passwordResetToken = resetToken;

    
    if(!!!user){
      user = await this.userService.createUserFromWebhook(
        customer as Stripe.Customer
      );
    }

    console.log(user);
    
    
    const plan = await this.planService.findOneByStripeProductId(
      subscription.items.data[0].price.product as string
    );

    console.log(plan);

    const userPlanStatus =
      await this.userPlanStatusService.findByUserIdAndPlanId(user.id, plan.id);


    console.log(userPlanStatus);

    
    if(!!!userPlanStatus){
      await this.userPlanStatusService.createByWebhook(user.id, plan.id);
    }

    await this.userPlanStatusService.updateStatus(userPlanStatus.id, 'active');

     
    
    console.log('resetLink:', resetLink);
    
    
    await this.sendEmailService.sendPasswordResetEmail(user.email, resetLink, user.name);
    this.logger.log(`Email de reset de senha enviado para: ${user.email}`);
  }

  async syncProductsAndPrices() {
    this.logger.log('Sincronizando produtos e preços do Stripe');
    const products = await this.stripe.products.list();
    for (const product of products.data) {
      await this.planService.createOrUpdateFromStripe(product);
      this.logger.log(`Produto sincronizado: ${product.id}`);
      const prices = await this.stripe.prices.list({ product: product.id });
      for (const price of prices.data) {
        await this.planService.updatePriceFromStripe(price);
        this.logger.log(`Preço sincronizado: ${price.id}`);
      }
    }
    this.logger.log('Sincronização de produtos e preços concluída');
  }
}
