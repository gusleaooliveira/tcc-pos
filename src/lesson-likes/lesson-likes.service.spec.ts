import { Test, TestingModule } from '@nestjs/testing';
import { LessonLikesService } from './lesson-likes.service';

describe('LessonLikesService', () => {
  let service: LessonLikesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonLikesService],
    }).compile();

    service = module.get<LessonLikesService>(LessonLikesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
