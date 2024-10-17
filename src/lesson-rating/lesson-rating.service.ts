import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonRatingDto } from './dto/create-lesson-rating.dto';
import { UpdateLessonRatingDto } from './dto/update-lesson-rating.dto';
import { LessonRating } from './entities/lesson-rating.entity';
import { UserService } from 'src/user/user.service';
import { LessonService } from 'src/lesson/lesson.service';

@Injectable()
export class LessonRatingService {
  constructor(
    @InjectRepository(LessonRating)
    private readonly lessonRatingRepository: Repository<LessonRating>,

    private readonly userService: UserService,

    @Inject(forwardRef(() => LessonService))
    private readonly lessonService: LessonService,
  ) {}

  async create(
    createLessonRatingDto: CreateLessonRatingDto,
  ): Promise<LessonRating> {
    const user = await this.userService.findOne(createLessonRatingDto.user_id);
    const lesson = await this.lessonService.findOne(
      createLessonRatingDto.lesson_id,
    );

    const data = {
      ...createLessonRatingDto,
      user_id: user,
      lesson_id: lesson,
    };

    const lessonRating = this.lessonRatingRepository.create(data);
    return await this.lessonRatingRepository.save(lessonRating);
  }

  async findAll(): Promise<LessonRating[]> {
    return await this.lessonRatingRepository
      .createQueryBuilder('lesson_rating')
      .leftJoinAndSelect('lesson_rating.user_id', 'user_id')
      .leftJoinAndSelect('lesson_rating.lesson_id', 'lesson_id')
      .getMany();
  }

  async findOne(id: string): Promise<LessonRating> {
    const lessonRating = await this.lessonRatingRepository
      .createQueryBuilder('lesson_rating')
      .leftJoinAndSelect('lesson_rating.user_id', 'user_id')
      .leftJoinAndSelect('lesson_rating.lesson_id', 'lesson_id')
      .where('lesson_rating.id = :id', { id })
      .getOne();
    if (!lessonRating) {
      throw new NotFoundException(`LessonRating with ID ${id} not found`);
    }
    return lessonRating;
  }

  async findByLesson(lesson_id: string) {
    const lessonRating = await this.lessonRatingRepository
      .createQueryBuilder('lesson_rating')
      .leftJoinAndSelect('lesson_rating.user_id', 'user')
      .where('lesson_rating.lesson_id = :lesson_id', { lesson_id })
      .getMany();
    return lessonRating;
  }

  async findByLessonAndUser(lesson_id: string, user_id: string) {
    const lessonRating = await this.lessonRatingRepository
      .createQueryBuilder('lesson_rating')
      .leftJoinAndSelect('lesson_rating.user_id', 'user')
      .where('lesson_rating.lesson_id = :lesson_id', { lesson_id })
      .andWhere('lesson_rating.user_id = :user_id', { user_id })
      .getMany();
    return lessonRating;
  }

  async update(
    id: string,
    updateLessonRatingDto: UpdateLessonRatingDto,
  ): Promise<LessonRating> {
    const user = await this.userService.findOne(updateLessonRatingDto.user_id);
    const lesson = await this.lessonService.findOne(
      updateLessonRatingDto.lesson_id,
    );

    const data = {
      ...updateLessonRatingDto,
      user_id: user,
      lesson_id: lesson,
    };

    await this.lessonRatingRepository.update(id, data);
    const updatedLessonRating = await this.findOne(id);
    return updatedLessonRating;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.lessonRatingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`LessonRating with ID ${id} not found`);
    }

    return { message: `LessonRating with ID ${id} deleted` };
  }
}
