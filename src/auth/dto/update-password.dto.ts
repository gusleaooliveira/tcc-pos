import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty({ message: 'The old password is required' })
  oldPassword: string;

  @IsString()
  @IsNotEmpty({ message: 'The new password is required' })
  newPassword: string;
}
