import {
  Body,
  Controller,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { UploadService } from './upload.service';

@ApiTags('upload')
@Controller('upload')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('video')
  @UseInterceptors(FileInterceptor('file'))
  async updateVideo(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.updateVideo(file);
  }

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  async updateImage(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.updateImage(file);
  }

  @Put('avatar')
  @UseInterceptors(FileInterceptor('file'))
  async updateUser(@UploadedFile() file: Express.Multer.File, @Body() body) {
    const { user } = body;
    return await this.uploadService.updateAvatar(file, user);
  }

  @Post('document')
  @UseInterceptors(FileInterceptor('file'))
  async updateDocument(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.updateDocument(file);
  }

  @Post('certificate')
  @UseInterceptors(FileInterceptor('file'))
  async updateCertificate(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.updateCertificate(file);
  }
}
