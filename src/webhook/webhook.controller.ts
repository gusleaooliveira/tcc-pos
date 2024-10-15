import { Body, Controller, Headers, HttpCode, HttpStatus, Post, RawBodyRequest, Req, Res, UseInterceptors, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express'; 
import { WebhookService } from './webhook.service';

@ApiTags('webhook')
@Controller('webhook')  
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async handleWebhook(
    @Headers('stripe-signature') signature: string,
    @Req() req: RawBodyRequest<Request>
  ) {
    this.logger.log('Recebido webhook do Stripe');
    this.logger.debug(`Assinatura recebida: ${signature || 'nenhuma'}`);

    if (!signature) {
      this.logger.error('Assinatura do Stripe não fornecida');
      throw new Error('Assinatura do Stripe não fornecida');
    }

    try {
      const rawBody = req.rawBody;
      if (!rawBody) {
        this.logger.error('Corpo bruto da requisição não disponível');
        throw new Error('Corpo bruto da requisição não disponível');
      }

      this.logger.debug(`Tamanho do corpo bruto: ${rawBody.length}`);
      this.logger.debug(`Primeiros 100 bytes do corpo: ${rawBody.slice(0, 100).toString('hex')}`);

      const event = await this.webhookService.constructEvent(rawBody, signature);
      this.logger.log(`Evento Stripe processado com sucesso: ${event.type}`);

      await this.webhookService.handleStripeEvent(event);

      this.logger.log(`Evento ${event.type} tratado com sucesso`);
      return { received: true };
    } catch (err) {
      this.logger.error(`Erro ao processar o webhook: ${err.message}`, err.stack);
      throw new Error('Erro no Webhook');
    }
  }
}
