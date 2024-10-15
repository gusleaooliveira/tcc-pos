import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentaryDto {
  @ApiProperty({ description: 'Commentary text', example: 'Great lesson!' })
  commentary: string;

  @ApiProperty({ description: 'User ID', example: 1 })
  user_id: number;

  @ApiProperty({ description: 'Lesson ID', example: 1 })
  lesson_id: number;
}
