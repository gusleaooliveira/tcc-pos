import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';
import { UpdateSocialMediaDto } from './dto/update-social-media.dto';
import { SocialMedia } from './entities/social-media.entity';

@Injectable()
export class SocialMediaService {
  constructor(
    @InjectRepository(SocialMedia)
    private readonly socialMediaRepository: Repository<SocialMedia>
  ) {}

  async create(
    createSocialMediaDto: CreateSocialMediaDto
  ): Promise<SocialMedia> {
    const socialMedia = this.socialMediaRepository.create(createSocialMediaDto);
    return await this.socialMediaRepository.save(socialMedia);
  }

  async findAll(): Promise<SocialMedia[]> {
    return await this.socialMediaRepository.find();
  }

  async findOne(id: string): Promise<SocialMedia> {
    const socialMedia = await this.socialMediaRepository.findOneBy({ id });
    if (!socialMedia) {
      throw new NotFoundException(`SocialMedia with ID ${id} not found`);
    }
    return socialMedia;
  }

  async update(
    id: string,
    updateSocialMediaDto: UpdateSocialMediaDto
  ): Promise<SocialMedia> {
    await this.socialMediaRepository.update(id, updateSocialMediaDto);
    const updatedSocialMedia = await this.findOne(id);
    return updatedSocialMedia;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.socialMediaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`SocialMedia with ID ${id} not found`);
    }
    return { message: `SocialMedia with ID ${id} deleted` };
  }
}
