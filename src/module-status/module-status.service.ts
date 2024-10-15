import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModuleStatusDto } from './dto/create-module-status.dto';
import { UpdateModuleStatusDto } from './dto/update-module-status.dto';
import { ModuleStatus } from './entities/module-status.entity';

@Injectable()
export class ModuleStatusService {
  constructor(
    @InjectRepository(ModuleStatus)
    private readonly moduleRepository: Repository<ModuleStatus>
  ) {}

  async create(
    createModuleStatusDto: CreateModuleStatusDto
  ): Promise<ModuleStatus> {
    const module = this.moduleRepository.create(createModuleStatusDto);
    return await this.moduleRepository.save(module);
  }

  async findAll(): Promise<ModuleStatus[]> {
    return await this.moduleRepository.find();
  }

  async findOne(id: string): Promise<ModuleStatus> {
    const module = await this.moduleRepository.findOneBy({ id });
    if (!module) {
      throw new NotFoundException(`ModuleStatus with ID ${id} not found`);
    }
    return module;
  }

  async update(
    id: string,
    updateModuleStatusDto: UpdateModuleStatusDto
  ): Promise<ModuleStatus> {
    await this.moduleRepository.update(id, updateModuleStatusDto);
    const updatedModuleStatus = await this.findOne(id);
    return updatedModuleStatus;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.moduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ModuleStatus with ID ${id} not found`);
    }

    return { message: `ModuleStatus with ID ${id} deleted` };
  }
}
