import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonProgressDto {
  @ApiProperty({ description: 'User ID', example: 1 })
  user_id: string;

  @ApiProperty({ description: 'Lesson ID', example: 1 })
  lesson_id: string;

  @ApiProperty({ description: 'Percentage of completion', example: 75 })
  percentage_completed: number;

  @ApiProperty({
    description: 'Date when the progress was updated',
    example: '2024-09-10T12:00:00Z',
  })
  updated_at: Date;
}
