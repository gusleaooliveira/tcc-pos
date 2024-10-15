import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleStatusDto } from './create-module-status.dto';

export class UpdateModuleStatusDto extends PartialType(CreateModuleStatusDto) {}
