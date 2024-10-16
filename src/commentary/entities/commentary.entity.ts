import { Lesson } from 'src/lesson/entities/lesson.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('commentary')
export class Commentary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  commentary: string;

  @ManyToOne(() => User, (user) => user.commentaries)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => Lesson, (lesson) => lesson.commentaries)
  @JoinColumn({ name: 'lesson_id' })
  lesson_id: Lesson;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
