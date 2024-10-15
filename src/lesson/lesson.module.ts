import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentModule } from 'src/document/document.module';
import { ImageModule } from 'src/image/image.module';
import { ModuleModule } from 'src/module/module.module';
import { VideoModule } from 'src/video/video.module';
import { Lesson } from './entities/lesson.entity';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { LessonRatingModule } from 'src/lesson-rating/lesson-rating.module';
import { LessonLikes } from 'src/lesson-likes/entities/lesson-like.entity';
import { LessonLikesModule } from 'src/lesson-likes/lesson-likes.module';
import { LessonGateway } from './lesson.gateway';
import { LessonProgressService } from 'src/lesson-progress/lesson-progress.service';
import { LessonProgressModule } from 'src/lesson-progress/lesson-progress.module';
import { CommentaryModule } from 'src/commentary/commentary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]),
    ImageModule,
    DocumentModule,
    VideoModule,
    forwardRef(() => LessonModule),
    forwardRef(() => LessonRatingModule),
    forwardRef(() => LessonLikesModule),
    forwardRef(() => LessonProgressModule),
    forwardRef(() => CommentaryModule),
  ],
  controllers: [LessonController],
  providers: [LessonService, LessonGateway],
  exports: [LessonModule, LessonService, LessonGateway],
})
export class LessonModule {}
