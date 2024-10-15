import { Test, TestingModule } from '@nestjs/testing';
import { UserPlanStatusService } from './user-plan-status.service';

describe('UserPlanStatusService', () => {
  let service: UserPlanStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPlanStatusService],
    }).compile();

    service = module.get<UserPlanStatusService>(UserPlanStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
