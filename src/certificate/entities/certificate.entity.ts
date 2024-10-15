import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('certificate')
export class Certificate {
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
}
