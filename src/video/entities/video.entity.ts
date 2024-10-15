import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('video')
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @OneToOne(() => Lesson, (lesson) => lesson.video)
  lesson: Lesson;
}
