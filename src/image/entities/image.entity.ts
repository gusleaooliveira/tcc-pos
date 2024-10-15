import { Lesson } from 'src/lesson/entities/lesson.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('image')
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @OneToOne(() => User, (user) => user.avatar)
  user: User;

  @OneToMany(() => Lesson, (lesson) => lesson.thumbnail)
  thumbnailLessons: Lesson[];

  @OneToMany(() => Lesson, (lesson) => lesson.miniature)
  miniatureLessons: Lesson[];
}
