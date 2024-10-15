import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Module } from './entities/module.entity';
import { LessonService } from 'src/lesson/lesson.service';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module)
    private readonly moduleRepository: Repository<Module>,
    private readonly lessonService: LessonService
  ) {}

  async create(createModuleDto: CreateModuleDto): Promise<Module> {
    // Criar o módulo primeiro
    const moduleData = {
      title: createModuleDto.title,
      subtitle: createModuleDto.subtitle,
      full_description: createModuleDto.full_description,
      short_description: createModuleDto.short_description,
      number_of_lessons: createModuleDto.number_of_lessons,
    };
    const module = this.moduleRepository.create(moduleData);
    const savedModule = await this.moduleRepository.save(module);

    // Agora criar as lições associadas ao módulo
    if (createModuleDto.lessons && createModuleDto.lessons.length > 0) {
      const lessonsWithModule = createModuleDto.lessons.map((lesson) => ({
        ...lesson,
        module_id: savedModule,
      }));
      await this.lessonService.createMany(lessonsWithModule as any);
    }

    // Retornar o módulo com as lições
    return this.findOne(savedModule.id);
  }
  async findAll(): Promise<Module[]> {
    return await this.moduleRepository
      .createQueryBuilder('module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .leftJoinAndSelect('lessons.video', 'video')
      .leftJoinAndSelect('lessons.thumbnail', 'thumbnail')
      .leftJoinAndSelect('lessons.miniature', 'miniature')
      .leftJoinAndSelect(
        'lessons.complementary_materials',
        'complementary_materials'
      )
      .getMany();
  }

  async findAllForHome() {
    return await this.moduleRepository
      .createQueryBuilder('module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .leftJoinAndSelect('lessons.video', 'video')
      .leftJoinAndSelect('lessons.thumbnail', 'thumbnail')
      .leftJoinAndSelect('lessons.miniature', 'miniature')
      .leftJoinAndSelect(
        'lessons.complementary_materials',
        'complementary_materials'
      )
      .getMany();
  }

  async findOne(id: string): Promise<Module> {
    const module = await this.moduleRepository
      .createQueryBuilder('module')
      .leftJoinAndSelect('module.lessons', 'lessons')
      .leftJoinAndSelect('lessons.video', 'video')
      .leftJoinAndSelect('lessons.thumbnail', 'thumbnail')
      .leftJoinAndSelect('lessons.miniature', 'miniature')
      .leftJoinAndSelect(
        'lessons.complementary_materials',
        'complementary_materials'
      )
      .where('module.id = :id', { id })
      .getOne();
    if (!module) {
      throw new NotFoundException(`Module with ID ${id} not found`);
    }
    return module;
  }

  async update(id: string, updateModuleDto: UpdateModuleDto): Promise<Module> {
    const lessons = await this.lessonService.findManyIfNotExistsCreate(
      updateModuleDto.lessons
    );
    const data = {
      ...updateModuleDto,
      lessons,
    };
    await this.moduleRepository.update(id, data);
    const updatedModule = await this.findOne(id);
    return updatedModule;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.moduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Module with ID ${id} not found`);
    }

    return { message: `Module with ID ${id} deleted` };
  }
}
