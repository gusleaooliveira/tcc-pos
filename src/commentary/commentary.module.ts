import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentaryService } from './commentary.service';
import { CommentaryController } from './commentary.controller';
import { Commentary } from './entities/commentary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commentary])],
  controllers: [CommentaryController],
  providers: [CommentaryService],
  exports: [CommentaryService],
})
export class CommentaryModule {}
