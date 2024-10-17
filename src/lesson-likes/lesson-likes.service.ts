import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonLikesDto } from './dto/create-lesson-like.dto';
import { UpdateLessonLikesDto } from './dto/update-lesson-like.dto';
import { LessonLikes } from './entities/lesson-like.entity';
import { UserService } from 'src/user/user.service';
import { LessonService } from 'src/lesson/lesson.service';

@Injectable()
export class LessonLikesService {
  constructor(
    @InjectRepository(LessonLikes)
    private readonly lessonLikesRepository: Repository<LessonLikes>,

    private readonly userService: UserService,

    @Inject(forwardRef(() => LessonService))
    private readonly lessonService: LessonService,
  ) {}

  async createOrUpdate(body: CreateLessonLikesDto) {
    const { lesson_id, user_id, is_liked } = body;
    const lessonLikes = await this.lessonLikesRepository
      .createQueryBuilder('lesson_likes')
      .where('lesson_likes.lesson_id = :lesson_id', { lesson_id })
      .andWhere('lesson_likes.user_id = :user_id', { user_id })
      .getOne();

    if (lessonLikes) {
      return await this.update(lessonLikes.id, {
        user_id,
        lesson_id,
        is_liked,
      });
    }

    return await this.create({
      user_id,
      lesson_id,
      is_liked,
    });
  }

  async create(
    createLessonLikesDto: CreateLessonLikesDto,
  ): Promise<LessonLikes> {
    const user = await this.userService.findOne(createLessonLikesDto.user_id);
    const lesson = await this.lessonService.findOne(
      createLessonLikesDto.lesson_id,
    );

    const data = {
      ...createLessonLikesDto,
      user_id: user,
      lesson_id: lesson,
    };

    const lessonLikes = this.lessonLikesRepository.create(data);
    return await this.lessonLikesRepository.save(lessonLikes);
  }

  async findAll(): Promise<LessonLikes[]> {
    return await this.lessonLikesRepository
      .createQueryBuilder('lesson_likes')
      .leftJoinAndSelect('lesson_likes.user_id', 'user_id')
      .leftJoinAndSelect('lesson_likes.lesson_id', 'lesson_id')
      .getMany();
  }

  async findOne(id: string): Promise<LessonLikes> {
    const lessonLikes = await this.lessonLikesRepository
      .createQueryBuilder('lesson_likes')
      .leftJoinAndSelect('lesson_likes.user_id', 'user_id')
      .leftJoinAndSelect('lesson_likes.lesson_id', 'lesson_id')
      .where('lesson_likes.id = :id', { id })
      .getOne();
    if (!lessonLikes) {
      throw new NotFoundException(`LessonLikes with ID ${id} not found`);
    }
    return lessonLikes;
  }

  async findOneByLessonIdAndUser(lesson_id: string, user_id: string) {
    const lessonRating = await this.lessonLikesRepository
      .createQueryBuilder('lesson_likes')
      .leftJoinAndSelect('lesson_likes.user_id', 'user_id')
      .where('lesson_likes.lesson_id = :lesson_id', { lesson_id })
      .andWhere('lesson_likes.user_id = :user_id', { user_id })
      .getOne();
    return lessonRating;
  }

  async findByLessonAndCount(lesson_id: string) {
    const lessonRating = await this.lessonLikesRepository
      .createQueryBuilder('lesson_likes')
      .where('lesson_likes.lesson_id = :lesson_id', { lesson_id })
      .getCount();
    return lessonRating;
  }

  async findByLessonAndUser(lesson_id: string, user_id: string) {
    const lessonRating = await this.lessonLikesRepository
      .createQueryBuilder('lesson_likes')
      .leftJoinAndSelect('lesson_likes.user_id', 'user_id')
      .where('lesson_likes.lesson_id = :lesson_id', { lesson_id })
      .andWhere('lesson_likes.user_id = :user_id', { user_id })
      .getOne();
    return lessonRating;
  }

  async update(id: string, updateLessonLikesDto: any): Promise<LessonLikes> {
    await this.lessonLikesRepository.update({ id }, updateLessonLikesDto);
    const updatedLessonLikes = await this.findOne(id);
    return updatedLessonLikes;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.lessonLikesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`LessonLikes with ID ${id} not found`);
    }

    return { message: `LessonLikes with ID ${id} deleted` };
  }
}
