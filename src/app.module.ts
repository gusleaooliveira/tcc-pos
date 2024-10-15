import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CertificateModule } from './certificate/certificate.module';
import { CommentaryModule } from './commentary/commentary.module';
import { DocumentModule } from './document/document.module'; 
import { ImageModule } from './image/image.module';
import { LessonLikesModule } from './lesson-likes/lesson-likes.module';
import { LessonProgressModule } from './lesson-progress/lesson-progress.module';
import { LessonRatingModule } from './lesson-rating/lesson-rating.module';
import { LessonModule } from './lesson/lesson.module';
import { ModuleStatusModule } from './module-status/module-status.module';
import { ModuleModule } from './module/module.module';
import { SendEmailModule } from './send-email/send-email.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { UploadModule } from './upload/upload.module';
import { UserPlanStatusModule } from './user-plan-status/user-plan-status.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { WebhookModule } from './webhook/webhook.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    WebhookModule,
    UploadModule,
    SendEmailModule,
    AuthModule,
    SocialMediaModule,
    AddressModule, 
    ImageModule,
    DocumentModule,
    VideoModule,
    UserModule,
    LessonModule,
    LessonProgressModule,
    LessonRatingModule,
    LessonLikesModule,
    ModuleModule,
    ModuleStatusModule,
    CertificateModule,
    CommentaryModule,
    UserPlanStatusModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {
  
}
