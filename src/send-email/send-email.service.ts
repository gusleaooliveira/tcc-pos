import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class SendEmailService {
 
  // Injetando o MailerService no construtor
  constructor(private readonly mailerService: MailerService) {}

  // Envio de email de cancelamento de assinatura
  async sendCancellationEmail(to: string, data: any) {
    try {
      await this.mailerService.sendMail({
        to,
        subject: 'Subscription Cancellation',
        template: 'cancellation',
        context: data,
      });
    } catch (error) {
      // Tratar o erro, talvez logar ou lançar uma exceção customizada
      console.error(`Error sending cancellation email to ${to}:`, error);
      throw new Error('Failed to send cancellation email');
    }
  }

  // Envio de email de confirmação de pagamento
  async sendPaymentConfirmationEmail(to: string, data: any) {
    await this.mailerService.sendMail({
      to,
      subject: 'Seja bem-vindo!',
      template: 'payment-confirmation',
      context: {
        userName: data.userName,
        linkPassword: data.linkPassword,
      },
      attachments: [
        {
          filename: 'logo.png',
          path: join(__dirname, 'templates', 'assets', 'logo.png'),
          cid: 'logo',
        },
        {
          filename: 'instagram-icon.png',
          path: join(__dirname, 'templates', 'assets', 'instagram-icon.png'),
          cid: 'instagram-icon',
        },
        {
          filename: 'youtube-icon.png',
          path: join(__dirname, 'templates', 'assets', 'youtube-icon.png'),
          cid: 'youtube-icon',
        },
        {
          filename: 'linkedin-icon.png',
          path: join(__dirname, 'templates', 'assets', 'linkedin-icon.png'),
          cid: 'linkedin-icon',
        },
        {
          filename: 'facebook-icon.png',
          path: join(__dirname, 'templates', 'assets', 'facebook-icon.png'),
          cid: 'facebook-icon',
        },
      ],
    });
  }

  async sendSubscriptionUpdatedEmail(to: string, data: any) {
    await this.mailerService.sendMail({
      to,
      subject: 'Subscription Updated',
      template: 'subscription-updated', // Nome do template .hbs
      context: data, // Dados passados para o template
    });
  }


  async sendPasswordResetEmail(email: string, resetLink: string, userName: string) {

    await this.mailerService.sendMail({
      to: email,
      subject: 'Seja bem-vindo!',
      template: 'payment-confirmation',
      context: {
        userName: userName,
        linkPassword: resetLink,
      },
      attachments: [
        {
          filename: 'logo.png',
          path: join(__dirname, 'templates', 'assets', 'logo.png'),
          cid: 'logo',
        },
        {
          filename: 'instagram-icon.png',
          path: join(__dirname, 'templates', 'assets', 'instagram-icon.png'),
          cid: 'instagram-icon',
        },
        {
          filename: 'youtube-icon.png',
          path: join(__dirname, 'templates', 'assets', 'youtube-icon.png'),
          cid: 'youtube-icon',
        },
        {
          filename: 'linkedin-icon.png',
          path: join(__dirname, 'templates', 'assets', 'linkedin-icon.png'),
          cid: 'linkedin-icon',
        },
        {
          filename: 'facebook-icon.png',
          path: join(__dirname, 'templates', 'assets', 'facebook-icon.png'),
          cid: 'facebook-icon',
        },
      ],
    });

   
  }

  // Envio de email de criação de conta
  async sendAccountCreatedEmail(to: string, data: any) {
    await this.mailerService.sendMail({
      to,
      subject: 'Account Created Successfully',
      template: 'account-created', // Nome do template .hbs
      context: data, // Dados passados para o template
    });
  }
}
