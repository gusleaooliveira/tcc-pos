import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateImageDto {
  @ApiProperty({ description: 'Title of the image', example: 'Avatar' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'URL of the image',
    example: 'https://example.com/avatar.png',
  })
  @IsUrl()
  @IsNotEmpty()
  url: string;
}
