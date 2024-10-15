import { ApiProperty } from '@nestjs/swagger';

export class CreateSocialMediaDto {
  @ApiProperty({
    description: 'Instagram profile link',
    example: 'https://instagram.com/user',
  })
  instagram?: string;

  @ApiProperty({
    description: 'Facebook profile link',
    example: 'https://facebook.com/user',
  })
  facebook?: string;

  @ApiProperty({
    description: 'Twitter profile link',
    example: 'https://twitter.com/user',
  })
  twitter?: string;

  @ApiProperty({
    description: 'LinkedIn profile link',
    example: 'https://linkedin.com/in/user',
  })
  linkedin?: string;

  @ApiProperty({
    description: 'TikTok profile link',
    example: 'https://tiktok.com/@user',
  })
  tiktok?: string;

  @ApiProperty({
    description: 'YouTube channel link',
    example: 'https://youtube.com/user',
  })
  youtube?: string;
}
