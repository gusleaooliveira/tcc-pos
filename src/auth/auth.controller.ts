import { Body, Controller, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger'; // Importando Swagger decoradores
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { ResetDto } from './dto/reset.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  // @UseGuards(LocalStrategy)
  @ApiOperation({ summary: 'Login do usuário' })
  async login(@Body() body: CreateAuthDto, @Res() res) {
    console.log(body);
    return await this.authService.login(body, res);
  }

  @Post('reset-password')
  async resetPassword(@Body() body: ResetDto) {
    console.log(body);
    
    const success = await this.authService.resetPassword(body.token, body.new_password);

    if (success) {
      return { message: 'Senha redefinida com sucesso' };
    } else {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }

  
  @Post('change-password')
  @ApiOperation({ summary: 'Troca de senha do usuário' })
  async changePassword(
    @Req() req,
    @Body() updatePasswordDto: UpdatePasswordDto
  ) {
    return this.authService.changePassword(req.user.id, updatePasswordDto);
  }

  
}
