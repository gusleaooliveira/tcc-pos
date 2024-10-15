import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cep: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  number: string;

  @OneToOne(() => User, (user) => user.address)
  user: User;
}
