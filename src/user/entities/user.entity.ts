import * as bcrypt from 'bcrypt';
import { Address } from 'src/address/entities/address.entity'; 
import { Image } from 'src/image/entities/image.entity';
import { SocialMedia } from 'src/social-media/entities/social-media.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  password: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
