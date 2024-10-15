import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({ description: 'Name of the address', example: 'Home' })
  name: string;

  @ApiProperty({ description: 'CEP (Postal code)', example: '12345-678' })
  cep: string;

  @ApiProperty({ description: 'Country', example: 'Brazil' })
  country: string;

  @ApiProperty({ description: 'State', example: 'São Paulo' })
  state: string;

  @ApiProperty({ description: 'City', example: 'São Paulo' })
  city: string;

  @ApiProperty({ description: 'Neighborhood', example: 'Jardim Paulista' })
  neighborhood: string;

  @ApiProperty({ description: 'Street name', example: 'Av. Paulista' })
  street: string;

  @ApiProperty({
    description: 'Complement',
    example: 'Apartment 101',
    nullable: true,
  })
  complement?: string;

  @ApiProperty({ description: 'Number', example: '1953' })
  number: string;
}
