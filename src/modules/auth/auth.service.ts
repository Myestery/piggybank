import { HttpException, Injectable, Logger, Inject } from '@nestjs/common';

import { EventEmitter2 as EventEmitter } from '@nestjs/event-emitter';
import { IUser } from './../users/users.interface';
import { JWTPayload } from './../users/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { ResendEmailDto } from './dto/resend-email.dto';
import { User } from '../users/models/user.model';
import { UsersService } from '../users/users.service'
import { VerifyEmailDto } from './dto/verify-email.dto';
import { jwtConstants } from './constants';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';
import { PasswordReset } from './../users/password-reset.model';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdatePasswordDto } from './../users/dto/update-password.dto';
import { AddSecurityQuestionDto } from './dto/add-security-question.dto';
import { UserSecurityQuestion } from '../users/models/user-security-question.model';
// jwtConstants
const bcrypt = require('bcrypt');
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private eventEmitter: EventEmitter,
    @Inject('PASSWORD_RESET_REPOSITORY')
    private passwordReset: typeof PasswordReset,
  ) {}

  async validateUser(email: string, pass: string): Promise<JWTPayload> {
    let user: IUser;
    try {
      user = (await this.usersService.findOne(email)).toJSON();
    } catch (error) {
      return null;
    }
    const isValid = await bcrypt.compare(pass, user.password);
    if (isValid) {
      const { password, ...result } = user;
      return result;
    } else {
      return null;
    }
  }

  async validateUserWithError(
    email: string,
    pass: string,
  ): Promise<JWTPayload> {
    let user: JWTPayload = await this.validateUser(email, pass);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  }

  async login(user: IUser): Promise<string> {
    const payload: JWTPayload = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      business_id: user.business_id,
      verified: user.verified,
      phone: user.phone,
    };
    return await this.jwtService.signAsync(payload, {
      secret: `${jwtConstants.secret}`,
    });
  }

  async getUserFromToken(token: string): Promise<IUser | boolean> {
    // return this.jwtService.verifyAsync(token);
    let res;
    try {
      res = await this.jwtService.verifyAsync(token, {
        secret: `${jwtConstants.secret}`,
      });
    } catch (error) {
      res = false;
    }
    if (!!res) {
      try {
        let user = await this.usersService.findOneById(res.id);
        return user;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }


  async editPassword(
    UpdatePasswordDto: UpdatePasswordDto,
    email: string,
  ): Promise<boolean> {
    let user: IUser;
    try {
      user = {
        phone: '12',
        ...(await this.validateUserWithError(
          email,
          UpdatePasswordDto.password,
        )),
      };
    } catch (err) {
      throw new Error('Invalid password');
    }
    await this.usersService.updatePassword(
      user.id,
      UpdatePasswordDto.new_password,
    );
    return true;
  }


}
