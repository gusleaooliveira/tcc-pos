import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';
import { Commentary } from './entities/commentary.entity';

@Injectable()
export class CommentaryService {
  constructor(
    @InjectRepository(Commentary)
    private readonly commentaryRepository: Repository<Commentary>,
  ) {}

  async create(createCommentaryDto: any) {
    const commentary = this.commentaryRepository.create(createCommentaryDto);
    return await this.commentaryRepository.save(commentary);
  }

  async findAll(): Promise<Commentary[]> {
    return await this.commentaryRepository.find();
  }

  async findAllByLesson(lesson_id: string): Promise<Commentary[]> {
    return await this.commentaryRepository
      .createQueryBuilder('commentary')
      .leftJoinAndSelect('commentary.user_id', 'user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .where('commentary.lesson_id = :lesson_id', { lesson_id })
      .getMany();
  }

  async findOne(id: string): Promise<Commentary> {
    const commentary = await this.commentaryRepository.findOneBy({ id });
    if (!commentary) {
      throw new NotFoundException(`Commentary with ID ${id} not found`);
    }
    return commentary;
  }

  async update(id: string, updateCommentaryDto: any): Promise<Commentary> {
    await this.commentaryRepository.update(id, updateCommentaryDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.commentaryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Commentary with ID ${id} not found`);
    }

    return { message: `Commentary with ID ${id} deleted` };
  }
}
