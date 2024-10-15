import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { ConfigService } from '@nestjs/config';
import {
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

@Injectable()
export class ImageService {
  private s3Client: S3Client;

  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>
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

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const image = this.imageRepository.create(createImageDto);
    return await this.imageRepository.save(image);
  }

  async findAll(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  async findOne(id: string, res: any) {
    const image = await this.imageRepository.findOneBy({ id });

    const command = new GetObjectCommand({
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: image.title,
    });

    const response: any = await this.s3Client.send(command);

    if (!response) {
      throw new NotFoundException(`Image with ID ${id} not found`);
    }

    res.setHeader('Content-Type', response.ContentType); 

    response.Body.pipe(res);


    // const chunks = [];
    // for await (const chunk of response.Body) {
    //   chunks.push(chunk);
    // }
    // const buffer = Buffer.concat(chunks);

    // return {
    //   buffer,
    //   contentType: response.ContentType,
    // };
  }

  async findOneById(id: string) {
    const image = await this.imageRepository.findOneBy({ id });
    return image;
  }

  async update(id: string, updateImageDto: UpdateImageDto): Promise<Image> {
    await this.imageRepository.update(id, updateImageDto);
    const updatedImage = await this.findOneById(id);
    return updatedImage;
  }

  async remove(id: string): Promise<{ message: string }> {
    const image = await this.imageRepository.findOneBy({ id });
    if (!image) {
      throw new NotFoundException(`Imagem com ID ${id} não encontrada`);
    }

    // Apagar a imagem do AWS S3
    const deleteCommand = new DeleteObjectCommand({
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: image.title,
    });

    try {
      await this.s3Client.send(deleteCommand);
    } catch (error) {
      throw new Error(`Erro ao apagar a imagem do S3: ${error.message}`);
    }

    // Apagar o registro do banco de dados
    await this.imageRepository.delete(id);

    return { message: `Imagem com ID ${id} apagada do banco de dados e do S3` };
  }
}
