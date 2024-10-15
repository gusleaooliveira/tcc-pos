import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({
    description: 'Email do usuário',
    example: 'usuario@example.com',
  })
  email: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'senha123' })
  password: string;
}
