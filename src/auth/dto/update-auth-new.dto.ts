import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateNewPasswordDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'The password is required' })
  password: string;
}
