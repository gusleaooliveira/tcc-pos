import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { CreateAuthDto } from '../dto/create-auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(loginUser: CreateAuthDto) {
    const isValid = await this.authService.validateUser(loginUser);
    if (isValid.isValid == false) {
      const message = { message: 'Login invalido!' };
      return message;
    } else {
      return isValid.user;
    }
  }
}
