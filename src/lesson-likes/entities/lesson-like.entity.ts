import { Lesson } from 'src/lesson/entities/lesson.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('lesson_likes')
export class LessonLikes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => Lesson)
  @JoinColumn({ name: 'lesson_id' })
  lesson_id: Lesson;

  @Column({ default: false })
  is_liked: boolean;
}
