import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPlanStatusDto } from './create-user-plan-status.dto';

export class UpdateUserPlanStatusDto extends PartialType(
  CreateUserPlanStatusDto
) {}
