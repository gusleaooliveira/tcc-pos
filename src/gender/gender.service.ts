import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>
  ) {}

  async create(createGenderDto: CreateGenderDto): Promise<Gender> {
    const gender = this.genderRepository.create(createGenderDto);
    return await this.genderRepository.save(gender);
  }

  async findAll(): Promise<Gender[]> {
    return await this.genderRepository.find();
  }

  async findOne(id: string): Promise<Gender> {
    const gender = await this.genderRepository.findOneBy({ id });
    if (!gender) {
      throw new NotFoundException(`Gender with ID ${id} not found`);
    }
    return gender;
  }

  async update(id: string, updateGenderDto: UpdateGenderDto): Promise<Gender> {
    await this.genderRepository.update(id, updateGenderDto);
    const updatedGender = await this.findOne(id);
    return updatedGender;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.genderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Gender with ID ${id} not found`);
    }

    return { message: `Gender with ID ${id} deleted` };
  }
}
