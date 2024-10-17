import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  cep: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  neighborhood: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  number: string;

  @OneToOne(() => User, (user) => user.address)
  user: User;



}
