import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialMedia } from './entities/social-media.entity';
import { SocialMediaController } from './social-media.controller';
import { SocialMediaService } from './social-media.service';
@Module({
  imports: [TypeOrmModule.forFeature([SocialMedia])],
  controllers: [SocialMediaController],
  providers: [SocialMediaService],
  exports: [SocialMediaModule, SocialMediaService],
})
export class SocialMediaModule {}
