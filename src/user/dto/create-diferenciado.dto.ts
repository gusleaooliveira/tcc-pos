import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Image } from 'src/image/entities/image.entity';
import { SocialMedia } from 'src/social-media/entities/social-media.entity';
import { Address } from 'src/address/entities/address.entity';

export class CreateDiferenciadoUserDto {
  @ApiProperty({
    description: 'Email address',
    example: 'gus.leaono@gmail.com',
  })
  email: string;

  @ApiProperty({ description: 'First name of the user', example: 'Gustavo' })
  name: string;

  @ApiProperty({ description: 'Last name of the user', example: 'Leão' })
  last_name: string;

  @ApiProperty({ description: 'Avatar', type: Image, nullable: true })
  @IsOptional()
  avatar?: Image | null;

  @ApiProperty({
    description: 'Gender ID',
    example: '3cb0fafc-2e08-4615-bf7c-f120f599daec',
  })
  @IsString()
  gender: string;

  @ApiProperty({
    description: 'Social Media',
    type: SocialMedia,
    nullable: true,
  })
  @IsOptional()
  social_media?: SocialMedia;

  @ApiProperty({ description: 'Address', type: Address, nullable: true })
  @IsOptional()
  address?: Address;

  @ApiProperty({
    description: 'Phone number of the user',
    example: '+55 51 996801426',
  })
  phone?: string;

  @ApiProperty({
    description: 'Description of the user',
    example: 'Software Developer',
  })
  description: string;

  @ApiProperty({ description: 'CPF (Brazilian ID)', example: '123.456.789-00' })
  cpf: string;

  @ApiProperty({ description: 'Password', example: 'teste123' })
  password?: string;

  @ApiProperty({
    description: 'Stripe Customer ID (Optional)',
    example: 'cus_123456789',
  })
  stripe_customer_id?: string;

  @ApiProperty({
    description: 'Stripe Subscription ID (Optional)',
    example: 'sub_123456789',
  })
  stripe_subscription_id?: string;
}
