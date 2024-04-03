import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { jwtServiceMock } from './mocks/jwt-service.mock';
import {
  accessToken,
  authRegisterDTO,
  jwtPayload,
  resetToken,
} from './mocks/jwt.mock';
import { mailerServiceMock } from './mocks/mailer-service.mock';
import { userEntityList } from './mocks/user-entity-list.mock';
import { userRepositoryMock } from './mocks/user-repository.mock';
import { userServiceMock } from './mocks/user-service.mock';

describe('Authervice', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        userRepositoryMock,
        jwtServiceMock,
        userServiceMock,
        mailerServiceMock,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('Validar a definição do serviço', () => {
    expect(authService).toBeDefined();
  });

  describe('Token', () => {
    it('create token method', () => {
      const result = authService.createToken(userEntityList[0]);

      expect(result).toEqual({ accessToken });
    });

    it('verify token method', () => {
      const result = authService.verifyToken(accessToken);

      expect(result).toEqual(jwtPayload);
    });

    it('is valid token method', () => {
      const result = authService.isValidToken(accessToken);

      expect(result).toEqual(true);
    });
  });

  describe('Autenticação', () => {
    test('login method', async () => {
      const result = await authService.login('john@email.com', 'Senh@123');

      expect(result).toEqual({ accessToken });
    });

    test('forget method', async () => {
      // const result = await authService.forget('john@email.com');
      // expect(result).toEqual({ success: true });
    });

    test('reset method', async () => {
      const result = await authService.reset('Senh@123', resetToken);

      expect(result).toEqual({ accessToken });
    });

    test('register method', async () => {
      const result = await authService.register(authRegisterDTO);

      expect(result).toEqual({ accessToken });
    });
  });
});
