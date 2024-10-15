import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Image } from 'src/image/entities/image.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Is this a new user? (Used for tracking first login)',
    example: true,
  })
  is_new_user: boolean;

  @ApiProperty({
    description: 'Total progress in all lessons',
    example: 85,
    default: 0,
  })
  total_progress: number = 0;

  @ApiProperty({
    description: 'Is this a first login?',
    example: true,
  })
  is_first_login: boolean;
}
