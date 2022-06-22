import { Injectable, Inject } from '@nestjs/common';
import { User } from './models/user.model';
import { IUser } from './users.interface';
import { SignUpDto } from './../auth/dto/signup.dto';
import { v4 as uuidv4 } from 'uuid';
import { PasswordReset } from './password-reset.model';
import { create } from 'handlebars';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UserSecurityQuestion } from './models/user-security-question.model';
import { SupportMessage } from './models/support-messages.model';
import { SupportMessageDto } from './dto/support-message.dto';
import { EventEmitter2 as EventEmitter } from '@nestjs/event-emitter';
const bcrypt = require('bcrypt');
@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userModel: typeof User,
    @Inject('PASSWORD_RESET_REPOSITORY')
    private passwordReset: typeof PasswordReset,
    @Inject('USER_SECURITY_QUESTION_REPOSITORY')
    private userSecurityQuestion: typeof UserSecurityQuestion,
    @Inject('SUPPORT_MESSAGE_REPOSITORY')
    private supportMessageModel: typeof SupportMessage,
    private readonly eventEmitter: EventEmitter,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(email: string): Promise<User> {
    email = email.toLowerCase();
    return await this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  // find user by email
  async findByEmail(email: string): Promise<User> {
    email = email.toLowerCase();
    return await this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async create(
    user: SignUpDto,
    business_id: string,
    transaction,
  ): Promise<User> {
    // check if user exists
    const userExists = await this.findByEmail(user.email);
    if (userExists) {
      throw new Error('User already exists');
    }
    return this.userModel.create(
      {
        id: uuidv4(),
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email.toLowerCase(),
        business_id: business_id,
        password: bcrypt.hashSync(user.password, 10),
        phone: user.phone,
        role: 'admin',
        // 25 minutes from now,
        verification_code_expires: new Date(Date.now() + 1000 * 60 * 25),
      },
      { transaction },
    );
  }

  async update(id: string, user: IUser): Promise<User> {
    await this.userModel.update(user, {
      where: {
        id,
      },
    });
    return this.findOne(id);
  }

  async updatePassword(id: string, password: string): Promise<User> {
    await this.userModel.update(
      {
        password: bcrypt.hashSync(password, 10),
      },
      {
        where: {
          id,
        },
      },
    );
    return this.findOne(id);
  }

  async deleteShayoAccount() {
    await this.userModel.destroy({
      where: {
        email: 'shayo@oystrfinance.com',
      },
    });
  }


  async delete(id: string) {
    try {
      await this.userModel.destroy({
        where: {
          id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getUserName(id: string): Promise<string> {
    const user = await this.findOneById(id);
    return user.sayHello();
  }



  async CreateUser(user: IUser) {
    return await this.userModel.findOrCreate({
      defaults: { ...user },
      where: { id: user.id },
    });
  }

}
