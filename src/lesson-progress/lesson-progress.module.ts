import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonProgress } from './entities/lesson-progress.entity';
import { LessonProgressController } from './lesson-progress.controller';
import { LessonProgressService } from './lesson-progress.service';
import { UserModule } from 'src/user/user.module';
import { LessonModule } from 'src/lesson/lesson.module';

@Module({
  imports: [
    UserModule,
    forwardRef(() => LessonModule),
    TypeOrmModule.forFeature([LessonProgress]),
  ],
  controllers: [LessonProgressController],
  providers: [LessonProgressService],
  exports: [LessonProgressModule, LessonProgressService],
})
export class LessonProgressModule {}
