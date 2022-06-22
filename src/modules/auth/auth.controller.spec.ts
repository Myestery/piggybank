import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AppController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('Login route', () => {
    it('Should be defined', () => {
      expect(authController.login).toBeDefined();
    });
  });
});
