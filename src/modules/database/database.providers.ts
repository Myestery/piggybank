import { Logger } from '@nestjs/common';
import { PasswordReset } from './../users/password-reset.model';
import { Sequelize } from 'sequelize-typescript';
import { SupportMessage } from '../users/models/support-messages.model';
import { User } from '../users/models/user.model';
import { UserSecurityQuestion } from '../users/models/user-security-question.model';
const dotenv = require('dotenv');
dotenv.config();
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        port: +process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        logging:
          process.env.NODE_ENV === 'development'
            ? (msg: string, timing) => {
                Logger.log(msg, 'Database');
              }
            : false,
      });
      sequelize.addModels([
        User,
        PasswordReset,
        UserSecurityQuestion,
        SupportMessage,
      ]);
      return sequelize;
    },
  },
];

// no change
