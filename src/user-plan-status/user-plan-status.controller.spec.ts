import { Test, TestingModule } from '@nestjs/testing';
import { UserPlanStatusController } from './user-plan-status.controller';
import { UserPlanStatusService } from './user-plan-status.service';

describe('UserPlanStatusController', () => {
  let controller: UserPlanStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPlanStatusController],
      providers: [UserPlanStatusService],
    }).compile();

    controller = module.get<UserPlanStatusController>(UserPlanStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
