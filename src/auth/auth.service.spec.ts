import { NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: { findOneByEmail: jest.fn(), updatePassword: jest.fn() },
        },
        JwtService,
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should validate user and return user data', async () => {
    const user = {
      email: 'test@example.com',
      password: '123456',
      validatePassword: jest.fn().mockResolvedValue(true),
    };
    userService.findOneByEmail = jest.fn().mockResolvedValue(user);

    const result = await service.validateUser('test@example.com', '123456');
    expect(result).toEqual(user);
  });

  it('should throw NotFoundException for invalid credentials', async () => {
    userService.findOneByEmail = jest.fn().mockResolvedValue(null);
    await expect(
      service.validateUser('test@example.com', 'wrongpassword'),
    ).rejects.toThrow(NotFoundException);
  });
});
