import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonProgressDto {
  @ApiProperty({ description: 'User ID', example: 1 })
  user_id: string;

  @ApiProperty({ description: 'Lesson ID', example: 1 })
  lesson_id: string;

  @ApiProperty({ description: 'Time', example: 100 })
  time: number;
}
