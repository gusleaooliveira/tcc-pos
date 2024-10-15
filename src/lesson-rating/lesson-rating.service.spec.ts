import { Test, TestingModule } from '@nestjs/testing';
import { LessonRatingService } from './lesson-rating.service';

describe('LessonRatingService', () => {
  let service: LessonRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonRatingService],
    }).compile();

    service = module.get<LessonRatingService>(LessonRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
