import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('social_medias')
export class SocialMedia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  linkedin: string;

  @Column({ nullable: true })
  tiktok: string;

  @Column({ nullable: true })
  youtube: string;

  @OneToOne(() => User, (user) => user.social_media)
  user: User;
}
