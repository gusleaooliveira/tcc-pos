import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoDto {
  @ApiProperty({ description: 'Title of the video', example: 'Lesson 1' })
  title: string;

  @ApiProperty({
    description: 'URL of the video',
    example: 'https://example.com/lesson1.mp4',
  })
  url: string;
}
