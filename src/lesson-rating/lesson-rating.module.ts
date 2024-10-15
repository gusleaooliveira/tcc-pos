import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonRating } from './entities/lesson-rating.entity';
import { LessonRatingController } from './lesson-rating.controller';
import { LessonRatingService } from './lesson-rating.service';
import { LessonModule } from 'src/lesson/lesson.module';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [
    forwardRef(() => LessonModule),
    UserModule,
    TypeOrmModule.forFeature([LessonRating]),
  ],
  controllers: [LessonRatingController],
  providers: [LessonRatingService],
  exports: [LessonRatingModule, LessonRatingService],
})
export class LessonRatingModule {}
