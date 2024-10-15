import { ApiProperty } from '@nestjs/swagger';
import { CreateLessonDto } from 'src/lesson/dto/create-lesson.dto';

export class CreateModuleDto {
  @ApiProperty({
    description: 'Title of the module',
    example: 'TypeScript Basics',
  })
  title: string;

  @ApiProperty({
    description: 'Subtitle of the module',
    example: 'Introduction to the TypeScript Language',
  })
  subtitle: string;

  @ApiProperty({
    description: 'Full description of the module',
    example: 'Learn the basics of TypeScript in this module.',
  })
  full_description: string;

  @ApiProperty({
    description: 'Short description of the module',
    example: 'TypeScript basics',
  })
  short_description: string;

  @ApiProperty({ description: 'Number of lessons in the module', example: 10 })
  number_of_lessons: number;

  @ApiProperty({
    description: 'Lessons in the module',
    example: ['1', '2', '3'],
  })
  lessons: CreateLessonDto[];

  @ApiProperty({ default: null, example: '#0000' })
  color: string;
}
