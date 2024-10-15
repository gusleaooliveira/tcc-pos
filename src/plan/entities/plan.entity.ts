import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('plan')
export class Plan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  stripeProductId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
