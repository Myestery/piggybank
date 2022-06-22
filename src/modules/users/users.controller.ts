/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  UseGuards,
  Request,
  Res,
  Body,
  Put,
  Post,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SupportMessageDto } from './dto/support-message.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from 'src/common/decorators/user.decorator';
// UsersService

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/')
  async getUser(@Request() req) {
    const user = await this.UsersService.findByEmail(req.user.email);
    return {
      status: true,
      message: 'success',
      data: {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        business_id: user.business_id,
        verified: user.verified,
      },
    };
  }


}
