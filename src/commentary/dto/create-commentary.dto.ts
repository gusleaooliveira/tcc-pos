import { ApiProperty } from '@nestjs/swagger';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateCommentaryDto {
  @ApiProperty({ description: 'Commentary text', example: 'Great lesson!' })
  commentary: string;

  @ApiProperty({ description: 'User ID', example: 1 })
  user_id: string | User;

  @ApiProperty({ description: 'Lesson ID', example: 1 })
  lesson_id: string | Lesson;
}
