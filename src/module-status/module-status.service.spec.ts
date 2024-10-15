import { Test, TestingModule } from '@nestjs/testing';
import { ModuleStatusService } from './module-status.service';

describe('ModuleStatusService', () => {
  let service: ModuleStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleStatusService],
    }).compile();

    service = module.get<ModuleStatusService>(ModuleStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
