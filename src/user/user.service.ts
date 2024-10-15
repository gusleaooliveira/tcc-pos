import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Address } from 'src/address/entities/address.entity';
import { UpdatePasswordDto } from 'src/auth/dto/update-password.dto'; 
import { Image } from 'src/image/entities/image.entity';
import { SocialMedia } from 'src/social-media/entities/social-media.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto'; 
import { SocialMediaService } from 'src/social-media/social-media.service';
import { AddressService } from 'src/address/address.service';
import { ImageService } from 'src/image/image.service';
import Stripe from 'stripe';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
 
    private readonly socialMediaService: SocialMediaService,
    private readonly addressService: AddressService,
    private readonly imageService: ImageService
  ) {}

  async changePassword(id: string, changePasswordDto: { password: string }) {
    const user = await this.findOne(id);
    const hashedPassword = await bcrypt.hash(changePasswordDto.password, 10);
    const updatedData: Partial<User> = {
      password: hashedPassword,
      is_first_login: false,
    };

    await this.update(id, updatedData as any);
    return { message: 'Senha alterada com sucesso' };
  }

  async createUserFromWebhook(customer: Stripe.Customer): Promise<User> {
    let user = await this.findUserByStripeCustomerId(customer.id);

    if (!user) {
      user = this.userRepository.create({
        email: customer.email,
        name: customer.name,
        stripe_customer_id: customer.id,
      });
    } else {
      user.email = customer.email;
      user.name = customer.name;
    }

    return await this.userRepository.save(user);
  }

  async create(createUserDto: CreateUserDto) { 
    const social_media = await this.socialMediaService.findOne(
      createUserDto.social_media
    );
    const address = await this.addressService.findOne(createUserDto.address);
    const avatar = await this.imageService.findOneById(createUserDto.avatar);
    const password = await bcrypt.hash(createUserDto.password, 10);

    const userToCreate = {
      ...createUserDto, 
      social_media,
      address,
      avatar,
      password,
    };

    const user = this.userRepository.create(userToCreate);
    return await this.userRepository.save(user);
  }

  async createDiferenciado(createUserDto: any) {
    console.log(createUserDto);
    const user = await this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findOneByEmailAndValidatePassword(email: string, pass: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .leftJoinAndSelect('user.social_media', 'social_media')
      .leftJoinAndSelect('user.address', 'address')
      .where('user.email = :email', { email })
      .getOne();

    console.log(user);

    if (!user) {
      return null;
    }
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      return null;
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async changeAvatar(user_id: any, image_id: any) {
    const user = await this.findOne(user_id);

    const avatarOldId = user?.avatar?.id;

    const avatar = await this.imageService.findOneById(image_id);

    await this.update(user.id, {
      avatar: avatar,
    });

    if (!!avatarOldId) await this.imageService.remove(avatarOldId);

    return await this.findOne(user.id);
  }

  async updatePassword(
    id: string,
    updatePasswordDto: UpdatePasswordDto
  ): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isPasswordValid = await bcrypt.compare(
      updatePasswordDto.oldPassword,
      user.password
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Senha antiga incorreta');
    }

    user.password = await bcrypt.hash(updatePasswordDto.newPassword, 10);
    user.is_first_login = false;
    return this.userRepository.save(user);
  }

  async findUserByStripeCustomerId(
    stripeCustomerId: string
  ): Promise<User | null> {
    return await this.userRepository.createQueryBuilder('user')
    .leftJoinAndSelect('user.avatar', 'avatar')
    .leftJoinAndSelect('user.social_media', 'social_media')
    .leftJoinAndSelect('user.address', 'address')
    .where('user.stripe_customer_id = :stripeCustomerId', { stripeCustomerId })
    .getOne();
     
  }

  async findUserWebhook(id: any) {
    const userByStripeCustomerId = await this.findUserByStripeCustomerId(
id );
    const userById = await this.userRepository.findOneBy({ id });

    if (!!userByStripeCustomerId || !!userById) {
      return { exists: true, user: userByStripeCustomerId || userById };
    } else {
      return { exists: false, user: null };
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .leftJoinAndSelect('user.social_media', 'social_media')
      .leftJoinAndSelect('user.address', 'address')
      .getMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.avatar', 'avatar')
      .leftJoinAndSelect('user.social_media', 'social_media')
      .leftJoinAndSelect('user.address', 'address')
      .where('user.id = :id', { id })
      .getOne();

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return user;
  }

  async updateDiferenciado(id: string, user: any) {
    const userToUpdate = await this.findOne(id); 

    let social_media: SocialMedia;
    let address: Address;
    let avatar: Image;
    let password: string;
    if (!!user?.social_media?.id)
      social_media = await this.socialMediaService.update(
        user.social_media.id,
        user.social_media
      );
    else social_media = await this.socialMediaService.create(user.social_media);
    if (!!user?.address?.id)
      address = await this.addressService.update(user.address.id, user.address);
    else address = await this.addressService.create(user.address);
    if (!!user?.password) password = await bcrypt.hash(user.password, 10);
    else password = userToUpdate.password;
    avatar = userToUpdate.avatar;

    await this.userRepository.update(id, {
      ...user, 
      social_media,
      address,
      avatar,
      password,
    });
    return await this.findOne(id);
  }

  async update(id: string, updateUserDto: any): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return { message: `Usuário com ID ${id} excluído` };
  }
}
