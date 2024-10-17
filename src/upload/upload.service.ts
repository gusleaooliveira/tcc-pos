import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CertificateService } from 'src/certificate/certificate.service';
import { DocumentService } from 'src/document/document.service';
import { ImageService } from 'src/image/image.service';
import { UserService } from 'src/user/user.service';
import { VideoService } from 'src/video/video.service';

@Injectable()
export class UploadService {
  findCreateDefault() {
    throw new Error('Method not implemented.');
  }
  private s3Client: S3Client;

  constructor(
    private readonly configService: ConfigService,
    private readonly videosService: VideoService,
    private readonly imagesService: ImageService,
    private readonly documentsService: DocumentService,
    private readonly certificatesService: CertificateService,
    private readonly userService: UserService
  ) {
    this.s3Client = new S3Client({
      region: this.configService.get('REGION'),
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
    });

    console.log('Variáveis de ambiente:');
    console.log('REGION:', this.configService.get('REGION'));
    console.log(
      'AWS_ACCESS_KEY_ID:',
      this.configService.get('AWS_ACCESS_KEY_ID')
    );
    console.log(
      'AWS_SECRET_ACCESS_KEY:',
      this.configService.get('AWS_SECRET_ACCESS_KEY')
    );
    console.log('BUCKET_NAME:', this.configService.get('BUCKET_NAME'));
    console.log('IMAGES_URL:', this.configService.get('IMAGES_URL'));
    console.log('VIDEOS_URL:', this.configService.get('VIDEOS_URL'));
  }

  async updateImage(file: Express.Multer.File) {
    try {
      const originalname = file.originalname.split('.');
      const name = `image/${new Date().toISOString()}.${originalname[originalname.length - 1]}`;
      const params = {
        Bucket: this.configService.get('BUCKET_NAME'),
        Key: name,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const command = new PutObjectCommand(params);
      await this.s3Client.send(command);

      const image = await this.imagesService.create({
        url: `${this.configService.get('IMAGES_URL')}/${name}`,
        title: name,
      });

      const response = await this.imagesService.update(image.id, {
        url: `${this.configService.get('IMAGES_URL')}/image/${image.id}`,
        title: name,
      });

      return response;
    } catch (error) {
      if (
        error.message.includes('is not authorized to perform: s3:PutObject')
      ) {
        throw new UnauthorizedException(
          'Usuário não autorizado a realizar upload de imagens para o S3. Verifique as permissões do usuário IAM.'
        );
      }
      throw new Error(`Falha ao fazer upload da imagem: ${error.message}`);
    }
  }

  async updateAvatar(file: Express.Multer.File, user: any) {
    try {
      const originalname = file.originalname.split('.');
      const name = `image/${new Date().toISOString()}.${originalname[originalname.length - 1]}`;
      const params = {
        Bucket: this.configService.get('BUCKET_NAME'),
        Key: name,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const command = new PutObjectCommand(params);
      await this.s3Client.send(command);

      const image = await this.imagesService.create({
        url: `${this.configService.get('IMAGES_URL')}/${name}`,
        title: name,
      });

      const responseImage = await this.imagesService.update(image.id, {
        url: `${this.configService.get('IMAGES_URL')}/image/${image.id}`,
        title: name,
      });

      const response = await this.userService.changeAvatar(
        user,
        responseImage.id
      );

      return response;
    } catch (error) {
      if (
        error.message.includes('is not authorized to perform: s3:PutObject')
      ) {
        throw new UnauthorizedException(
          'Usuário não autorizado a realizar upload de imagens para o S3. Verifique as permissões do usuário IAM.'
        );
      }
      throw new Error(`Falha ao fazer upload da imagem: ${error.message}`);
    }
  }

  async updateDocument(file: Express.Multer.File) {
    try {
      const originalname = file.originalname.split('.');
      const name = `document/${new Date().toISOString()}.${originalname[originalname.length - 1]}`;
      const params = {
        Bucket: this.configService.get('BUCKET_NAME'),
        Key: name,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const command = new PutObjectCommand(params);
      await this.s3Client.send(command);

      const image = await this.documentsService.create({
        url: `${this.configService.get('IMAGES_URL')}/${name}`,
        title: name,
        type: file.mimetype,
        size: file.size,
      });

      const response = await this.documentsService.update(image.id, {
        url: `${this.configService.get('IMAGES_URL')}/document/${image.id}`,
        title: name,
      });

      return response;
    } catch (error) {
      if (
        error.message.includes('is not authorized to perform: s3:PutObject')
      ) {
        throw new UnauthorizedException(
          'Usuário não autorizado a realizar upload de imagens para o S3. Verifique as permissões do usuário IAM.'
        );
      }
      throw new Error(`Falha ao fazer upload da imagem: ${error.message}`);
    }
  }

  async updateCertificate(file: Express.Multer.File) {
    try {
      const originalname = file.originalname.split('.');
      const name = `certificate/${new Date().toISOString()}.${originalname[originalname.length - 1]}`;
      const params = {
        Bucket: this.configService.get('BUCKET_NAME'),
        Key: name,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const command = new PutObjectCommand(params);
      await this.s3Client.send(command);

      const image = await this.certificatesService.create({
        url: `${this.configService.get('IMAGES_URL')}/${name}`,
        title: name,
        type: file.mimetype,
        size: file.size,
      });

      const response = await this.certificatesService.update(image.id, {
        url: `${this.configService.get('IMAGES_URL')}/certificate/${image.id}`,
        title: name,
      });

      return response;
    } catch (error) {
      if (
        error.message.includes('is not authorized to perform: s3:PutObject')
      ) {
        throw new UnauthorizedException(
          'Usuário não autorizado a realizar upload de imagens para o S3. Verifique as permissões do usuário IAM.'
        );
      }
      throw new Error(`Falha ao fazer upload da imagem: ${error.message}`);
    }
  }

  async updateVideo(file: Express.Multer.File) {
    try {
      const originalname = file.originalname.split('.');
      const name = `video/${new Date().toISOString()}.${originalname[originalname.length - 1]}`;
      const params = {
        Bucket: this.configService.get('BUCKET_NAME'),
        Key: name,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const command = new PutObjectCommand(params);
      await this.s3Client.send(command);

      return await this.videosService.create({
        url: `${this.configService.get('VIDEOS_URL')}/${name}`,
        title: name,
      });
    } catch (error) {
      if (
        error.message.includes('is not authorized to perform: s3:PutObject')
      ) {
        throw new UnauthorizedException(
          'Usuário não autorizado a realizar upload de vídeos para o S3. Verifique as permissões do usuário IAM.'
        );
      }
      throw new Error(`Falha ao fazer upload do vídeo: ${error.message}`);
    }
  }
}
