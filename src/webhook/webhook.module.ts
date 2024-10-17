import { forwardRef, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PlanModule } from 'src/plan/plan.module';
import { SendEmailModule } from 'src/send-email/send-email.module';
import { UserPlanStatusModule } from 'src/user-plan-status/user-plan-status.module';
import { UserModule } from 'src/user/user.module';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    UserModule,
    PlanModule,
    UserPlanStatusModule,
    SendEmailModule,
    forwardRef(() => AuthModule),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [WebhookController],
  providers: [WebhookService],
  exports: [WebhookModule, WebhookService],
})
export class WebhookModule {}
