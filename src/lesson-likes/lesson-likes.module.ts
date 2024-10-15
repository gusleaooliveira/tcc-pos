import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonLikes } from './entities/lesson-like.entity';
import { LessonLikesController } from './lesson-likes.controller';
import { LessonLikesService } from './lesson-likes.service';
import { LessonModule } from 'src/lesson/lesson.module';
import { UserModule } from 'src/user/user.module';
import { LessonProgressModule } from 'src/lesson-progress/lesson-progress.module';

@Module({
  imports: [
    forwardRef(() => LessonModule),
    UserModule,
    TypeOrmModule.forFeature([LessonLikes]),
  ],
  controllers: [LessonLikesController],
  providers: [LessonLikesService],
  exports: [LessonLikesModule, LessonLikesService],
})
export class LessonLikesModule {}
