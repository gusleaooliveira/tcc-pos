import { Lesson } from 'src/lesson/entities/lesson.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('document')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  size: number;

  @Column()
  url: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.complementary_materials, {
    nullable: true,
  })
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;

  @Column({ nullable: true })
  type_document: string;

  @Column({ nullable: true })
  document_description: string;
}
