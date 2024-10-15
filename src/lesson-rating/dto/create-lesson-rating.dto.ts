import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonRatingDto {
  @ApiProperty({ description: 'Lesson ID' })
  lesson_id: string;

  @ApiProperty({ description: 'User ID' })
  user_id: string;

  @ApiProperty({ description: 'Rating from 1 to 5' })
  rating: number;

  @ApiProperty({ description: 'Feedback text', example: 'Great lesson!' })
  feedback: string;

  @ApiProperty({
    description: 'Creation date of the rating',
    example: '2024-09-10T12:00:00Z',
  })
  created_at: Date;
}
