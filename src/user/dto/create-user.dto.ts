import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'aws-sdk/clients/ses';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Image } from 'src/image/entities/image.entity';
import { SocialMedia } from 'src/social-media/entities/social-media.entity';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email address',
    example: 'gus.leaono@gmail.com',
  })
  email: string;

  @ApiProperty({ description: 'First name of the user', example: 'Gustavo' })
  name: string;

  @ApiProperty({ description: 'Last name of the user', example: 'Leão' })
  last_name: string;

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

  @ApiProperty({
    description: 'ID of the gender entity',
    example: '3cb0fafc-2e08-4615-bf7c-f120f599daec',
  })
  gender: string;

  @ApiProperty({
    description: 'ID of the social media entity',
    example: 'ae632abb-0078-4b29-9670-d2cccc89d9c2',
  })
  social_media: string;

  @ApiProperty({
    description: 'ID of the address entity',
    example: 'e72627a6-6b08-4aff-a54f-c2aabfa8ebf9',
  })
  address: string;

  @ApiProperty({
    description: 'ID of the avatar entity',
    example: 'e72627a6-6b08-4aff-a54f-c2aabfa8ebf9',
  })
  avatar: string;

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
