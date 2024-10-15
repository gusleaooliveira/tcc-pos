import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('gender')
export class Gender {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gender: string;

  @OneToMany(() => User, (user) => user.gender)
  users: User[];
}
