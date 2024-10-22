import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateNewPasswordDto {
  @ApiProperty() 
  password: string;
}
