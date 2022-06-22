import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { AuthMiddleware } from './../../common/middlewares/auth.middleware';
import { AuthModule } from './../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MicroService } from './services/micro.service';
import { PaginationMiddleware } from './../../common/middlewares/pagination.middleware';

const dotenv = require('dotenv');
dotenv.config();

let pass = process.env.JWT_SECRET_KEY;
@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
    consumer.apply(PaginationMiddleware).forRoutes('*');
  }
}
