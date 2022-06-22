import { Logger, Module } from '@nestjs/common';

import { databaseProviders } from './database.providers';

@Module({
  imports: [
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
