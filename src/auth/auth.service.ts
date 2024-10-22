import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async generatePasswordResetToken(userId: string): Promise<string> {
    const token = uuidv4();
    await this.userService.savePasswordResetToken(userId, token);
    return token;
  }

  async resetPassword(token: string, newPassword: string): Promise<boolean> {
    const user = await this.userService.findUserByResetToken(token);
    if (!user) {
      return false;
    } 
 

    await this.userService.updatePasswordToReset(user.id, {
      password: newPassword,
    });
    await this.userService.clearPasswordResetToken(user.id);
    return true;
  }

  async validateUser(loginUser: CreateAuthDto) {
    const isMatchPassword =
      await this.userService.findOneByEmailAndValidatePassword(
        loginUser.email,
        loginUser.password,
      );

    if (!isMatchPassword) {
      const message = {
        isValid: false,
        message: 'Email or password is invalid',
        user: null,
      };
      return message;
    }

    if (!!isMatchPassword == true) {
      return { isValid: true, message: null, user: isMatchPassword };
    }
  }

  async login(loginUser: CreateAuthDto, res) {
    const response = await this.validateUser(loginUser);

    if (response.isValid == true) {
      const payload = { email: response.user.email, sub: response.user.id };
      res.status(201).send({
        user: response.user,
        access_token: this.jwtService.sign(payload),
      });
    } else {
      res.status(401).send({ message: response.message });
    }
  }

  async changePassword(userId: string, updatePasswordDto: UpdatePasswordDto) {
    return this.userService.updatePassword(userId, updatePasswordDto);
  }
}
