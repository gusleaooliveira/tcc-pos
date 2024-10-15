import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/document/entities/document.entity';
import { Image } from 'src/image/entities/image.entity';
import { Module } from 'src/module/entities/module.entity';
import { Video } from 'src/video/entities/video.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';
import { ImageService } from 'src/image/image.service';
import { DocumentService } from 'src/document/document.service';
import { VideoService } from 'src/video/video.service';
import { LessonRatingService } from 'src/lesson-rating/lesson-rating.service';
import { LessonLikesService } from 'src/lesson-likes/lesson-likes.service';
import { LessonProgressModule } from 'src/lesson-progress/lesson-progress.module';
import { LessonProgressService } from 'src/lesson-progress/lesson-progress.service';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,

    private readonly imageService: ImageService,
    private readonly documentService: DocumentService,
    private readonly videoService: VideoService,

    @Inject(forwardRef(() => LessonRatingService))
    private readonly lessonRatingService: LessonRatingService,

    @Inject(forwardRef(() => LessonLikesService))
    private readonly lessonLikesService: LessonLikesService,

    @Inject(forwardRef(() => LessonProgressService))
    private readonly lessonProgressService: LessonProgressService,
  ) {}

  async create(createLessonDto: any): Promise<Lesson> {
    const thumbnail = await this.imageService.findOneById(
      createLessonDto.thumbnail,
    );
    const miniature = await this.imageService.findOneById(
      createLessonDto.miniature,
    );
    const complementary_materials = await this.documentService.findMany(
      createLessonDto.complementary_materials,
    );
    const video = await this.videoService.findOne(createLessonDto.video_id);

    const data = {
      ...createLessonDto,
      thumbnail,
      miniature,
      complementary_materials,
      video,
    };

    const dt = Object.assign(data, {
      module: createLessonDto.module_id as Module,
    });

    const updatedLesson = await this.lessonRepository.save(dt);
    return updatedLesson;
  }

  async createMany(lessons: CreateLessonDto[]) {
    const lessonsCreated = await Promise.all(
      lessons.map(async (lesson) => {
        return await this.create(lesson);
      }),
    );

    console.log('lessonsCreated', lessonsCreated);

    return lessonsCreated;
  }

  async findAll(): Promise<Lesson[]> {
    return await this.lessonRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.thumbnail', 'thumbnail')
      .leftJoinAndSelect('lesson.miniature', 'miniature')
      .leftJoinAndSelect(
        'lesson.complementary_materials',
        'complementary_materials',
      )
      .leftJoinAndSelect('lesson.video', 'video')
      .leftJoinAndSelect('lesson.module', 'module')
      .leftJoinAndSelect('lesson.commentaries', 'commentaries')
      .leftJoinAndSelect('commentaries.user', 'user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .getMany();
  }

  async findMany(lessons: UpdateLessonDto[]) {
    const ids = lessons.map((lesson) => lesson.id);
    return await this.lessonRepository
      .createQueryBuilder('lesson')
      .where('lesson.id IN (:...ids)', { ids: ids })
      .getMany();
  }

  async findManyIfNotExistsCreate(lessons: any) {
    const lessonsExists = await this.findMany(lessons);
    console.log('lessonsExists', lessonsExists.length > 0);
    if (lessonsExists.length == 0) {
      const lessonsToCreate = lessons.map(async (lesson: CreateLessonDto) => {
        return await this.create(lesson);
      });
      return await Promise.all(lessonsToCreate);
    }
    return lessonsExists;
  }

  async findOne(id: string): Promise<Lesson> {
    const lesson = await this.lessonRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.thumbnail', 'thumbnail')
      .leftJoinAndSelect('lesson.miniature', 'miniature')
      .leftJoinAndSelect(
        'lesson.complementary_materials',
        'complementary_materials',
      )
      .leftJoinAndSelect('lesson.video', 'video')
      .leftJoinAndSelect('lesson.module', 'module')
      .leftJoinAndSelect('lesson.commentaries', 'commentaries')
      .leftJoinAndSelect('commentaries.user', 'user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .where('lesson.id = :id', { id })
      .getOne();

    if (!lesson) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }

    const rating = await this.lessonRatingService.findByLesson(id);
    const likes = await this.lessonLikesService.findByLessonAndCount(id);
    const time_read = await this.lessonProgressService.findOneByLesson(id);

    console.log(time_read);

    let response: any = {
      ...lesson,
    };

    if (!!rating) {
      response = { ...response, commentaries: rating };
    }
    if (!!likes) {
      response = { ...response, likes: likes };
    }
    if (!!time_read) {
      response = { ...response, time_read: time_read.percentage_completed };
    }

    return response;
  }

  async update(id: string, updateLessonDto: UpdateLessonDto): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOneBy({ id });
    if (!lesson) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }

    if (updateLessonDto.thumbnail)
      lesson.thumbnail = await this.imageService.findOneById(
        updateLessonDto.thumbnail,
      );
    if (updateLessonDto.miniature)
      lesson.miniature = await this.imageService.findOneById(
        updateLessonDto.miniature,
      );
    if (updateLessonDto.complementary_materials)
      lesson.complementary_materials = await this.documentService.findMany(
        updateLessonDto.complementary_materials,
      );
    if (updateLessonDto.video_id)
      lesson.video = await this.videoService.findOne(updateLessonDto.video_id);

    return await this.lessonRepository.save(lesson);
  }

  async remove(id: string): Promise<{ message: string }> {
    const lesson = await this.lessonRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.thumbnail', 'thumbnail')
      .leftJoinAndSelect('lesson.miniature', 'miniature')
      .leftJoinAndSelect(
        'lesson.complementary_materials',
        'complementary_materials',
      )
      .leftJoinAndSelect('lesson.video', 'video')
      .leftJoinAndSelect('lesson.module', 'module')
      .leftJoinAndSelect('lesson.commentaries', 'commentaries')
      .leftJoinAndSelect('commentaries.user', 'user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .where('lesson.id = :id', { id })
      .getOne();

    await this.imageService.remove(lesson.thumbnail.id);
    await this.imageService.remove(lesson.miniature.id);
    await this.documentService.removeMany(
      lesson.complementary_materials.map((material) => material.id),
    );
    await this.videoService.remove(lesson.video.id);

    const result = await this.lessonRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }
    return { message: `Lesson with ID ${id} deleted` };
  }
}
