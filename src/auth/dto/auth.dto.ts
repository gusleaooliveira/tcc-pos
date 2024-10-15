import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email address', example: 'johndoe@example.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ description: 'Password', example: 'password123' })
  password: string;
}
