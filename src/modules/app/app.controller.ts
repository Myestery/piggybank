import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AppService } from './services/app.service';

import { EventEmitter2 as EventEmitter } from '@nestjs/event-emitter';
import { ErrorDto, Errors } from '../../types/Errors';
import { MicroService } from './services/micro.service';
@Controller({
  version: '1',
})
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly eventEmitter: EventEmitter,
    private readonly MicroService: MicroService,
  ) {}

  swaggerError(@Body() body: ErrorDto) {
    return body;
  }

  @Get('/version')
  getVersion() {
    return this.appService.getVersion();
  }

}
