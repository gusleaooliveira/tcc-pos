import { Lesson } from 'src/lesson/entities/lesson.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('lesson_progress')
export class LessonProgress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.lession_progress)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => Lesson, (lesson) => lesson.lessons_progress)
  @JoinColumn({ name: 'lesson_id' })
  lesson_id: Lesson;

  @Column({ nullable: true, default: 0})
  percentage_completed: number;

  @Column({ nullable: true, default: 0, type: 'float' })
  time: number;

  @UpdateDateColumn()
  updated_at: Date;
}
