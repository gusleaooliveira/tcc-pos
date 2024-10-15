import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonLikesDto } from './create-lesson-like.dto';

export class UpdateLessonLikesDto extends PartialType(CreateLessonLikesDto) {}
