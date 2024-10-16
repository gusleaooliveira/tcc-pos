import { Lesson } from 'src/lesson/entities/lesson.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('lesson_rating')
export class LessonRating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.lesson_rating)
  @JoinColumn({ name: 'lesson_id' })
  lesson_id: Lesson;

  @ManyToOne(() => User, (user) => user.lesson_rating)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @Column({ nullable: true, generated: 'increment' })
  rating: number;

  @Column({ type: 'text' })
  feedback: string;

  @CreateDateColumn()
  created_at: Date;
}
