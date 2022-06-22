import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { PasswordReset } from './password-reset.model';
import { User } from './models/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...userProviders],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
