import { Module as NestModuleStatus } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleStatus } from './entities/module-status.entity';
import { ModuleStatusController } from './module-status.controller';
import { ModuleStatusService } from './module-status.service';

@NestModuleStatus({
  imports: [TypeOrmModule.forFeature([ModuleStatus])],
  controllers: [ModuleStatusController],
  providers: [ModuleStatusService],
})
export class ModuleStatusModule {}
