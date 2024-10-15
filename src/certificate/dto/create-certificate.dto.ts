import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificateDto {
  @ApiProperty({
    description: 'Title of the certificate',
    example: 'TypeScript Mastery',
  })
  title: string;

  @ApiProperty({ description: 'Type of certificate', example: 'Completion' })
  type: string;

  @ApiProperty({
    description: 'Size of the certificate in kilobytes',
    example: 512,
  })
  size: number;

  @ApiProperty({
    description: 'URL to download the certificate',
    example: 'https://example.com/certificate.pdf',
  })
  url: string;
}
