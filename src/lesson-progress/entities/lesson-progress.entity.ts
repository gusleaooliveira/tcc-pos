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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => Lesson)
  @JoinColumn({ name: 'lesson_id' })
  lesson_id: Lesson;

  @Column()
  percentage_completed: number;

  @UpdateDateColumn()
  updated_at: Date;
}
