import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonLikesDto {
  @ApiProperty({ description: 'User ID' })
  user_id: string;

  @ApiProperty({ description: 'Lesson ID' })
  lesson_id: string;

  @ApiProperty({
    description: 'Indicates if the lesson is liked',
    example: true,
  })
  is_liked: boolean;
}
