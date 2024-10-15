import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

// export class CreateSendEmailDto {
//   @IsEmail()
//   @IsNotEmpty()
//   to: string;

//   @IsString()
//   @IsNotEmpty()
//   subject: string;

//   @IsString()
//   @IsNotEmpty()
//   template: string;

//   @IsNotEmpty()
//   context: any;
// }

// { to: string; userName: string; linkPassword: string }

export class CreateSendEmailDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  to: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userName: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  linkPassword: string;
}
