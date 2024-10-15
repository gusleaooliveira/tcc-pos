import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { AppModule } from './app.module';

import * as express from 'express';
import { RawBody } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Darcio Flix API')
    .setDescription('API para darcio-flix')
    .setVersion('1.0')
    .addTag('address')
    .addTag('auth')
    .addTag('certificate')
    .addTag('commentary')
    .addTag('document')
    .addTag('gender')
    .addTag('image')
    .addTag('lesson')
    .addTag('lessons-likes')
    .addTag('lessons-progress')
    .addTag('lessons-rating')
    .addTag('modules')
    .addTag('modules-status')
    .addTag('plan')
    .addTag('social-media')
    .addTag('upload')
    .addTag('user')
    .addTag('user-plan-status')
    .addTag('video')
    .addTag('webhook')
    .addTag('send-email')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  // Middleware para todas as rotas (exceto o /webhook que já terá o seu middleware específico)
  //  app.use(bodyParser.json());

  // app.use('/api-json', (req, res) => {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.send(document);
  // });

  // app.use(
  //   '/webhook',
  //   json({
  //     verify: (req: any, res, buf) => {
  //       req.rawBody = buf;
  //     },
  //   }),
  // );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
