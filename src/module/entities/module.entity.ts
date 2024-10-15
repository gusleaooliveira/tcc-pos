import { Lesson } from 'src/lesson/entities/lesson.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('module')
export class Module {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column({ type: 'text' })
  full_description: string;

  @Column({ default: null })
  color: string;

  @Column()
  short_description: string;

  @Column()
  number_of_lessons: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Lesson, (lesson) => lesson.module, { cascade: true })
  lessons: Lesson[];
}
