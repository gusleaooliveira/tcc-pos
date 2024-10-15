import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from 'src/address/address.module'; 
import { ImageModule } from 'src/image/image.module';
import { SocialMediaModule } from 'src/social-media/social-media.module';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AddressModule, 
    SocialMediaModule,
    ImageModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
