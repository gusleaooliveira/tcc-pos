import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPlanStatus } from './entities/user-plan-status.entity';
import { UserPlanStatusController } from './user-plan-status.controller';
import { UserPlanStatusService } from './user-plan-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserPlanStatus])],
  controllers: [UserPlanStatusController],
  providers: [UserPlanStatusService],
  exports: [UserPlanStatusService],
})
export class UserPlanStatusModule {}
