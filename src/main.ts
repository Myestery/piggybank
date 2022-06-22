import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe, VersioningType } from '@nestjs/common';

import { AppModule } from './modules/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

const dotenv = require('dotenv');
async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.connectMicroservice({
  //   transport: Transport.REDIS,
  //   options: {
  //     url: process.env.REDIS_URL,
  //     retryAttempts: 10000000,
  //     retry_strategy: (options) => {
  //       if (options.error && options.error.code === 'ECONNREFUSED') {
  //         // End reconnecting on a specific error and flush all commands with a individual error
  //         return new Error('The server refused the connection');
  //       }
  //       if (options.total_retry_time > 1000 * 60 * 60000) {
  //         // End reconnecting after a specific timeout and flush all commands with a individual error
  //         console.log('retrying connection');
  //         return Math.min(options.attempt * 100, 3000);
  //       }
  //       if (options.attempt > 10) {
  //         // End reconnecting with built in error
  //         return Math.min(options.attempt * 100, 3000);
  //       }
  //       // reconnect after
  //       return Math.min(options.attempt * 100, 3000);
  //     },
  //   },
  // });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.disable('x-powered-by');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  // cors
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('OYSTR Finance')
    .setDescription('The OYSTR API description')
    .setVersion('1.0')
    .addTag('auth')
    .addBearerAuth()
    .build();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  // try {
  //   // await app.startAllMicroservices();
  // } catch (err) {
  //   console.error(err);
  // }
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
