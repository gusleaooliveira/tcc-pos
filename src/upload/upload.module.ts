import { Module } from '@nestjs/common';
import { ImageModule } from 'src/image/image.module';
import { VideoModule } from 'src/video/video.module';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { DocumentModule } from 'src/document/document.module';
import { CertificateModule } from 'src/certificate/certificate.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    VideoModule,
    ImageModule,
    DocumentModule,
    CertificateModule,
    UserModule,
  ],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadModule, UploadService],
})
export class UploadModule {}
