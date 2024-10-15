import { Test, TestingModule } from '@nestjs/testing';
import { LessonLikesController } from './lesson-likes.controller';
import { LessonLikesService } from './lesson-likes.service';

describe('LessonLikesController', () => {
  let controller: LessonLikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonLikesController],
      providers: [LessonLikesService],
    }).compile();

    controller = module.get<LessonLikesController>(LessonLikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
