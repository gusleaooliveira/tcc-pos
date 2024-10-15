import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlanDto {
  @ApiProperty({ description: 'Stripe Product ID', example: 'prod_ABC123' })
  @IsString()
  @IsNotEmpty()
  stripeProductId: string;

  @ApiProperty({ description: 'Name of the plan', example: 'Premium Plan' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Description of the plan',
    example: 'Full access to premium features',
  })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Price of the plan', example: 49.99 })
  @IsNumber()
  price: number;
}
