import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserPlanStatusDto } from './dto/create-user-plan-status.dto';
import { UpdateUserPlanStatusDto } from './dto/update-user-plan-status.dto';
import { UserPlanStatus } from './entities/user-plan-status.entity';

@Injectable()
export class UserPlanStatusService {
  constructor(
    @InjectRepository(UserPlanStatus)
    private readonly userPlanStatusRepository: Repository<UserPlanStatus>
  ) {}

  async create(
    createUserPlanStatusDto: CreateUserPlanStatusDto
  ): Promise<UserPlanStatus> {
    const userPlanStatus = this.userPlanStatusRepository.create(
      createUserPlanStatusDto
    );
    return await this.userPlanStatusRepository.save(userPlanStatus);
  }

  async createByWebhook(userId: string, planId: string): Promise<UserPlanStatus> {

    const user = await this.findOneByUserIdAndPlanId(userId, planId);

    if(user){
        await  this.userPlanStatusRepository.update({
        user: { id: userId },
        plan: { id: planId },
       }, {
        status: 'active',
       });
       return await this.findOneByUserIdAndPlanId(userId, planId)
    }

    const userPlanStatus = this.userPlanStatusRepository.create({
      user: { id: userId },
      plan: { id: planId },
      status: 'active',
    });
    return await this.userPlanStatusRepository.save(userPlanStatus);
  }


  async findOneByUserIdAndPlanId(userId: string, planId: string) {
    return await this.userPlanStatusRepository.findOne({
      where: { user: { id: userId }, plan: { id: planId } },
    });
  }


 

  async findAll(): Promise<UserPlanStatus[]> {
    return await this.userPlanStatusRepository.find();
  }

  async findOne(id: string): Promise<UserPlanStatus> {
    const userPlanStatus = await this.userPlanStatusRepository.findOneBy({
      id,
    });
    if (!userPlanStatus) {
      throw new NotFoundException(`UserPlanStatus with ID ${id} not found`);
    }
    return userPlanStatus;
  }

  async update(
    id: string,
    updateUserPlanStatusDto: UpdateUserPlanStatusDto
  ): Promise<UserPlanStatus> {
    const userPlanStatus = await this.findOne(id);
    if (!userPlanStatus) {
      throw new NotFoundException(`UserPlanStatus with ID ${id} not found`);
    }

    Object.assign(userPlanStatus, updateUserPlanStatusDto);
    return await this.userPlanStatusRepository.save(userPlanStatus);
  }

  async updateStatus(id: string, status: string): Promise<UserPlanStatus> {
    const userPlanStatus = await this.findOne(id);
    if (!userPlanStatus) {
      throw new NotFoundException(`UserPlanStatus with ID ${id} not found`);
    }

    userPlanStatus.status = status;
    userPlanStatus.updatedAt = new Date();
    return await this.userPlanStatusRepository.save(userPlanStatus);
  }
  async findByUserId(userId: string): Promise<UserPlanStatus[]> {
    return await this.userPlanStatusRepository.find({
      where: { user: { id: userId } },
    });
  }

  async findByUserIdAndPlanId(
    userId: string,
    planId: string
  ): Promise<UserPlanStatus | null> {
    return await this.userPlanStatusRepository.findOne({
      where: { user: { id: userId }, plan: { id: planId } },
    });
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.userPlanStatusRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`UserPlanStatus with ID ${id} not found`);
    }
    return { message: `UserPlanStatus with ID ${id} deleted` };
  }
}
