import { Test, TestingModule } from '@nestjs/testing';
import { LessonRatingController } from './lesson-rating.controller';
import { LessonRatingService } from './lesson-rating.service';

describe('LessonRatingController', () => {
  let controller: LessonRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonRatingController],
      providers: [LessonRatingService],
    }).compile();

    controller = module.get<LessonRatingController>(LessonRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
