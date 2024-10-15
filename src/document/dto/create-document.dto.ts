import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentDto {
  @ApiProperty({ description: 'Title of the document', example: 'Lesson Plan' })
  title: string;

  @ApiProperty({ description: 'Type of the document', example: 'PDF' })
  type: string;

  @ApiProperty({
    description: 'Size of the document in kilobytes',
    example: 1024,
  })
  size: number;

  @ApiProperty({
    description: 'URL to download the document',
    example: 'https://example.com/lesson_plan.pdf',
  })
  url: string;
}
