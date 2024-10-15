import { ApiProperty } from '@nestjs/swagger';

export class CreateGenderDto {
  @ApiProperty({ description: 'Gender', example: 'Male' })
  gender: string;
}
