import { Commentary } from 'src/commentary/entities/commentary.entity';
import { Document } from 'src/document/entities/document.entity';
import { Image } from 'src/image/entities/image.entity';
import { LessonProgress } from 'src/lesson-progress/entities/lesson-progress.entity';
import { LessonRating } from 'src/lesson-rating/entities/lesson-rating.entity';
import { Module } from 'src/module/entities/module.entity';
import { Video } from 'src/video/entities/video.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('lesson')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  full_description: string;

  @Column()
  short_description: string;

  @ManyToOne(() => Image, {
    nullable: true,
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  @JoinColumn({ name: 'thumbnail_id' })
  thumbnail: Image;

  @ManyToOne(() => Image, {
    nullable: true,
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  @JoinColumn({ name: 'miniature_id' })
  miniature: Image;

  @OneToMany(() => Document, (document) => document.lesson, {
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  complementary_materials: Document[];

  @OneToOne(() => Video, {
    nullable: true,
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  @JoinColumn({ name: 'video_id' })
  video: Video;

  @ManyToOne(() => Module, (module) => module.lessons)
  module: Module;

  @Column()
  order: number;

  @Column({ type: 'float', default: 0 })
  duration: number;

  @Column({ default: true })
  is_highlighted: boolean;

  @Column({ default: 0 })
  count_likes: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => LessonProgress, (lessonProgress) => lessonProgress.lesson_id)
  lessons_progress: LessonProgress[];

  @OneToMany(() => Commentary, (commentary) => commentary.lesson_id)
  commentaries: Commentary[];

  @OneToMany(() => LessonRating, (lessonRating) => lessonRating.lesson_id)
  lesson_rating: LessonRating[];
}
