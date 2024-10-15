import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString()
  @IsNotEmpty({ message: 'The old password is required' })
  oldPassword: string;

  @IsString()
  @MinLength(6, {
    message: 'The new password must be at least 6 characters long',
  })
  @IsNotEmpty({ message: 'The new password is required' })
  newPassword: string;
}
