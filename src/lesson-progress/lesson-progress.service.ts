import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonProgressDto } from './dto/create-lesson-progress.dto';
import { UpdateLessonProgressDto } from './dto/update-lesson-progress.dto';
import { LessonProgress } from './entities/lesson-progress.entity';
import { UserService } from 'src/user/user.service';
import { LessonService } from 'src/lesson/lesson.service';

@Injectable()
export class LessonProgressService {
  constructor(
    @InjectRepository(LessonProgress)
    private readonly lessonProgressRepository: Repository<LessonProgress>,

    private readonly userService: UserService,

    @Inject(forwardRef(() => LessonService))
    private readonly lessonService: LessonService,
  ) {}

  async createOrUpdate(createLessonProgressDto: any) {
    const lesson = await this.findOneByLessonAndUser(
      createLessonProgressDto.lesson_id,
      createLessonProgressDto.user_id,
    );

    if (!!lesson) {
      const data = {
        ...lesson,
        time: createLessonProgressDto.time,
      };
      await this.update(lesson.id, data);
    } else {
      await this.create(createLessonProgressDto);
    }
  }

  async findOneByLesson(lesson_id: string) {
    const response = await this.lessonProgressRepository
      .createQueryBuilder('lesson_progress')
      .where('lesson_progress.lesson_id = :lesson_id', {
        lesson_id,
      })
      .getOne();

    console.log(response);
    console.log(lesson_id);

    return response;
  }

  async findOneByLessonAndUser(lesson_id: string, user_id: string) {
    const response = await this.lessonProgressRepository
      .createQueryBuilder('lesson_progress')
      .leftJoinAndSelect('lesson_progress.lesson_id', 'lesson_id')
      .leftJoinAndSelect('lesson_progress.user_id', 'user_id')
      .where(
        'lesson_progress.lesson_id = :lesson_id AND lesson_progress.user_id = :user_id',
        {
          lesson_id,
          user_id,
        },
      )
      .getOne();

    return response;
  }

  async create(createLessonProgressDto: CreateLessonProgressDto) {
    const user = await this.userService.findOne(
      createLessonProgressDto.user_id,
    );
    const lesson = await this.lessonService.findOne(
      createLessonProgressDto.lesson_id,
    );

    const data = {
      ...createLessonProgressDto,
      lesson_id: lesson,
      user_id: user,
    };
    const lessonProgress = this.lessonProgressRepository.create(data);
    await this.lessonProgressRepository.save(lessonProgress);
  }

  async findAll(): Promise<LessonProgress[]> {
    return await this.lessonProgressRepository.find();
  }

  async findOne(id: string): Promise<LessonProgress> {
    const lessonProgress = await this.lessonProgressRepository
      .createQueryBuilder('lesson_progress')
      .leftJoinAndSelect('lesson_progress.lesson_id', 'lesson_id')
      .leftJoinAndSelect('lesson_progress.user_id', 'user_id')
      .where('lesson_progress.id = :id', {
        id,
      })
      .getOne();
    if (!lessonProgress) {
      throw new NotFoundException(`LessonProgress with ID ${id} not found`);
    }
    return lessonProgress;
  }

  async update(id: string, updateLessonProgressDto: any) {
    await this.lessonProgressRepository.update(id, updateLessonProgressDto);
  }

  async updateLessonProgress(lesson_id: string, updateLessonProgressDto: any) {
    await this.lessonProgressRepository.update(
      lesson_id,
      updateLessonProgressDto,
    );
    return await this.findOneByLesson(lesson_id);
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.lessonProgressRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`LessonProgress with ID ${id} not found`);
    }

    return { message: `LessonProgress with ID ${id} deleted` };
  }
}
