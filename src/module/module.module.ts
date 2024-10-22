import { Module as NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from './entities/module.entity';
import { ModuleController } from './module.controller';
import { ModuleService } from './module.service';
import { LessonModule } from 'src/lesson/lesson.module';
import { LessonProgressModule } from 'src/lesson-progress/lesson-progress.module';

@NestModule({
  imports: [TypeOrmModule.forFeature([Module]), LessonModule, LessonProgressModule],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports: [TypeOrmModule, ModuleService],
})
export class ModuleModule {}
