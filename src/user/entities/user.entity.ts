import * as bcrypt from 'bcrypt';
import { Address } from 'src/address/entities/address.entity';
import { Commentary } from 'src/commentary/entities/commentary.entity';
import { Image } from 'src/image/entities/image.entity';
import { LessonProgress } from 'src/lesson-progress/entities/lesson-progress.entity';
import { LessonRating } from 'src/lesson-rating/entities/lesson-rating.entity';
import { SocialMedia } from 'src/social-media/entities/social-media.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  description: string;

 
  @Column({ nullable: true })
  cpf: string;

 
  @Column({ nullable: true, default: null })
  gender: string;

  @OneToOne(() => SocialMedia, (socialMedia) => socialMedia.user, {
    nullable: true,
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  @JoinColumn({ name: 'social_media_id' })
  social_media: SocialMedia;

  @OneToOne(() => Address, (address) => address.user, {
    nullable: true,
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @OneToOne(() => Image, (image) => image.user, {
    nullable: true,
    cascade: true,
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  @JoinColumn({ name: 'avatar_id' })
  avatar: Image;

  @Column({ default: false })
  is_first_login: boolean;

  @Column({ unique: true, nullable: true })
  stripe_customer_id: string;

  @Column({ nullable: true })
  stripe_subscription_id: string;

  @Column({ default: 0, nullable: true })
  total_progress: number;

  @OneToMany(() => Commentary, (commentary) => commentary.user_id)
  commentaries: Commentary[];

  @OneToMany(() => LessonProgress, (lessonProgress) => lessonProgress.user_id)
  lession_progress: LessonProgress[];

  @OneToMany(() => LessonRating, (lessonRating) => lessonRating.user_id)
  lesson_rating: LessonRating[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ nullable: true })
  passwordResetToken: string;
}
