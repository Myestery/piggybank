import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { AddSecurityQuestionDto } from './dto/add-security-question.dto';
import { AuthService } from './auth.service';
import { EventEmitter2 as EventEmitter } from '@nestjs/event-emitter';
import { HttpException } from '@nestjs/common';
import { IUser } from './../users/users.interface';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto } from './dto/login.dto';
import { ResendEmailDto } from './dto/resend-email.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignUpDto } from './dto/signup.dto';
import { Transaction } from 'sequelize';
import { TransactionInterceptor } from 'src/common/interceptors/transaction.interceptor';
import { TransactionParam } from 'src/common/decorators/transaction-param.decorator';
import { UpdatePasswordDto } from '../users/dto/update-password.dto';
import { User } from '../users/models/user.model';
import { UsersService } from './../users/users.service';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private eventEmitter: EventEmitter,
  ) {}


}
