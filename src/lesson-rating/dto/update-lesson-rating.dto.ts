import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonRatingDto } from './create-lesson-rating.dto';

export class UpdateLessonRatingDto extends PartialType(CreateLessonRatingDto) {}
