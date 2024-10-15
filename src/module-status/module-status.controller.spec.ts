import { Test, TestingModule } from '@nestjs/testing';
import { ModuleStatusController } from './module-status.controller';
import { ModuleStatusService } from './module-status.service';

describe('ModuleStatusController', () => {
  let controller: ModuleStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleStatusController],
      providers: [ModuleStatusService],
    }).compile();

    controller = module.get<ModuleStatusController>(ModuleStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
