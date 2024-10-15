import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateLessonDto {
  @ApiProperty({
    description: 'Title of the lesson',
    example: 'Introduction to TypeScript',
  })
  title: string;

  @ApiProperty({
    description: 'Full description of the lesson',
    example: 'This lesson covers the basics of TypeScript.',
  })
  full_description: string;

  @ApiProperty({
    description: 'Short description of the lesson',
    example: 'Learn TypeScript basics.',
  })
  short_description: string;

  @ApiProperty({ description: 'Thumbnail image ID', example: 1 })
  thumbnail: string;

  @ApiProperty({ description: 'Miniature image ID', example: 2 })
  miniature: string;

  @ApiProperty({
    description: 'Complementary materials document ID',
    example: 1,
  })
  complementary_materials: string[];

  @ApiProperty({ description: 'Video ID of the lesson', example: 1 })
  video_id: string;

  @ApiProperty({ description: 'Module ID', example: 1 })
  module_id: string;

  @ApiProperty({ description: 'Order of the lesson in the module', example: 1 })
  order: number;

  @ApiProperty({
    description: 'Duration of the lesson in minutes',
    example: 60,
  })
  duration: number;

  @ApiProperty({ description: 'Is the lesson highlighted?', default: true })
  is_highlighted: boolean;

  @ApiProperty({
    description: 'Number of likes the lesson has received',
    example: 0,
  })
  count_likes: number;
}
