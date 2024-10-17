import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.entity';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlanService {

  private stripe: Stripe;

  constructor(
    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
    private configService: ConfigService
  ) {
    const stripeSecretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    this.stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-09-30.acacia',
    });
  }

  async createOrUpdateFromStripe(product: Stripe.Product): Promise<Plan> {
    let plan = await this.planRepository.findOne({
      where: { stripeProductId: product.id },
    });

    if (!!!plan) {
      plan = this.planRepository.create({
        stripeProductId: product.id ,
        name: product.name ? product.name : null,
        description: product.description ? product.description : null,
        price: product.metadata.price ? Number(product.metadata.price) : 0, // Definir um valor padrão ou null se a coluna permitir
      });
      return await this.planRepository.save(plan);
    } else {
      plan.name = product.name;
      plan.description = product.description;
      plan.price = product.metadata.price ? Number(product.metadata.price) : 0;
      return await this.planRepository.save(plan);
    }

    
  }

 
  async updatePriceFromStripe(price: Stripe.Price): Promise<Plan> {
    let plan = await this.planRepository.findOne({
      where: { stripeProductId: price.product as string },
    });

    if (!plan) {
      // Criar o plano se não existir
      const product = await this.stripe.products.retrieve(price.product as string);
      plan = await this.createOrUpdateFromStripe(product);
    }

    plan.price = price.unit_amount ? price.unit_amount / 100 : 0;
    return await this.planRepository.save(plan);
  }


   async removeByStripeProductId(stripeProductId: string): Promise<{ message: string }> {
    const result = await this.planRepository.delete({ stripeProductId });
    if (result.affected === 0) {
      throw new NotFoundException(`Plan with Stripe product ID ${stripeProductId} not found`);
    }
    return { message: `Plan with Stripe product ID ${stripeProductId} deleted` };
  }

  
  async createOrUpdate(planData: CreatePlanDto): Promise<Plan> {
    let plan = await this.planRepository.findOne({
      where: { stripeProductId: planData.stripeProductId },
    });

    if (!plan) {
      plan = this.planRepository.create(planData);
    } else {
      plan.name = planData.name;
      plan.description = planData.description;
      plan.price = planData.price;
    }

    return await this.planRepository.save(plan);
  }

  async create(createPlanDto: CreatePlanDto): Promise<Plan> {
    const plan = this.planRepository.create(createPlanDto);
    return await this.planRepository.save(plan);
  }

  async findAll(): Promise<Plan[]> {
    return await this.planRepository.find();
  }

  async findOne(id: string): Promise<Plan> {
    const plan = await this.planRepository.findOneBy({ id });
    if (!plan) {
      throw new NotFoundException(`Plan with ID ${id} not found`);
    }
    return plan;
  }

  async findOneByStripeProductId(stripeProductId: string): Promise<Plan> {
    const plan = await this.planRepository.findOne({
      where: { stripeProductId },
    });
    if (!plan) {
      throw new NotFoundException(
        `Plan with Stripe product ID ${stripeProductId} not found`
      );
    }
    return plan;
  }

  async update(id: string, updatePlanDto: UpdatePlanDto): Promise<Plan> {
    await this.planRepository.update(id, updatePlanDto);
    const updatedPlan = await this.findOne(id);
    return updatedPlan;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.planRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Plan with ID ${id} not found`);
    }
    return { message: `Plan with ID ${id} deleted` };
  }

  async createPaymentLink(planId: string): Promise<string> {
    const plan = await this.findOne(planId);
    if (!plan) {
      throw new Error('Plano não encontrado');
    }

    const successUrl = this.configService.get<string>('PAYMENT_SUCCESS_URL');
    const cancelUrl = this.configService.get<string>('PAYMENT_CANCEL_URL');

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: plan.name,
              description: plan.description,
            },
            unit_amount: Math.round(plan.price * 100), // Stripe usa centavos
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return session.url;
  }
}
