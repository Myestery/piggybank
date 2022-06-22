import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { HeaderApiKeyStrategy } from './auth-header-api-key.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TransactionInterceptor } from 'src/common/interceptors/transaction.interceptor';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from './constants';
import { userProviders } from '../users/users.providers';
@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule,
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2d' },
    }),
  ],
  providers: [
    ...userProviders,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    HeaderApiKeyStrategy,
    TransactionInterceptor,
    // { provide: 'SEQUELIZE', useExisting: Sequelize },
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
