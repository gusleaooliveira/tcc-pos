import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { SendEmailController } from './send-email.controller';
import { SendEmailService } from './send-email.service';
import * as fs from 'fs-extra';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: 'smtp.hostinger.com',
          port: 465,
          secure: true,
          auth: {
            user: configService.get<string>('EMAIL_USER'),
            pass: configService.get<string>('EMAIL_PASS'),
          },
        },
        defaults: {
          from: `"No Reply" <${configService.get<string>('EMAIL_FROM')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: false,
          },
        },
      }),
    }),
  ],
  controllers: [SendEmailController],
  providers: [SendEmailService],
  exports: [SendEmailService],
})
export class SendEmailModule {
  constructor(private configService: ConfigService) {
    this.copyTemplates();
    this.logEmailCredentials();
  }

  async copyTemplates() {
    const srcDir = join(
      __dirname,
      '..',
      '..',
      'src',
      'send-email',
      'templates'
    );
    const destDir = join(
      __dirname,
      '..',
      '..',
      'dist',
      'send-email',
      'templates'
    );

    try {
      await fs.copy(srcDir, destDir);
      console.log('Templates copiados com sucesso!');
    } catch (err) {
      console.error('Erro ao copiar os templates:', err);
    }
  }

  logEmailCredentials() {
    console.log('Credenciais de e-mail:');
    console.log('EMAIL_USER:', this.configService.get<string>('EMAIL_USER'));
    console.log('EMAIL_PASS:', this.configService.get<string>('EMAIL_PASS'));
    console.log('EMAIL_FROM:', this.configService.get<string>('EMAIL_FROM'));
  }
}
