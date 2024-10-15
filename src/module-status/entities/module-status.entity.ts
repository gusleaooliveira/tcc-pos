import { Certificate } from 'src/certificate/entities/certificate.entity';
import { Module } from 'src/module/entities/module.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('module_status')
export class ModuleStatus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Module)
  @JoinColumn({ name: 'module_id' })
  module: Module;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  quantity_completed: number;

  @Column({ default: false })
  is_completed: boolean;

  @ManyToOne(() => Certificate)
  @JoinColumn({ name: 'certificate_id' })
  certificate: Certificate;
}
