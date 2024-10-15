import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './entities/video.entity';
import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VideoService {
  private s3Client: S3Client;

  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>
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

  async create(createVideoDto: CreateVideoDto): Promise<Video> {
    const video = this.videoRepository.create(createVideoDto);
    return await this.videoRepository.save(video);
  }

  async findAll(): Promise<Video[]> {
    return await this.videoRepository.find();
  }

  async findOne(id: string): Promise<Video> {
    const video = await this.videoRepository.findOneBy({ id });
    if (!video) {
      throw new NotFoundException(`Video with ID ${id} not found`);
    }
    return video;
  }

  async update(id: string, updateVideoDto: UpdateVideoDto): Promise<Video> {
    await this.videoRepository.update(id, updateVideoDto);
    const updatedVideo = await this.findOne(id);
    return updatedVideo;
  }

  async remove(id: string): Promise<{ message: string }> {
    const video = await this.videoRepository.findOneBy({ id });
    if (!video) {
      throw new NotFoundException(`Vídeo com ID ${id} não encontrado`);
    }

    // Apagar o vídeo do AWS S3
    const deleteCommand = new DeleteObjectCommand({
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: video.title,
    });

    try {
      await this.s3Client.send(deleteCommand);
    } catch (error) {
      throw new Error(`Erro ao apagar o vídeo do S3: ${error.message}`);
    }

    // Apagar o registro do banco de dados
    const result = await this.videoRepository.delete(id);

    return { message: `Vídeo com ID ${id} apagado do banco de dados e do S3` };
  }
}
