import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { Certificate } from './entities/certificate.entity';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CertificateService {
  private s3Client: S3Client;

  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>
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

  async create(
    createCertificateDto: CreateCertificateDto
  ): Promise<Certificate> {
    const certificate = this.certificateRepository.create(createCertificateDto);
    return await this.certificateRepository.save(certificate);
  }

  async findAll(): Promise<Certificate[]> {
    return await this.certificateRepository.find();
  }

  async findOne(id: string) {
    const image = await this.certificateRepository.findOneBy({ id });

    const command = new GetObjectCommand({
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: image.title,
    });

    const response: any = await this.s3Client.send(command);

    if (!response) {
      throw new NotFoundException(`Image with ID ${id} not found`);
    }

    const chunks = [];
    for await (const chunk of response.Body) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    return {
      buffer,
      contentType: response.ContentType,
    };
  }

  async findOneById(id: string): Promise<Certificate> {
    const certificate = await this.certificateRepository.findOneBy({ id });
    if (!certificate) {
      throw new NotFoundException(`Certificate with ID ${id} not found`);
    }
    return certificate;
  }

  async update(
    id: string,
    updateCertificateDto: UpdateCertificateDto
  ): Promise<Certificate> {
    await this.certificateRepository.update(id, updateCertificateDto);
    const updatedCertificate = await this.findOneById(id);
    return updatedCertificate;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.certificateRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Certificate with ID ${id} not found`);
    }
    return { message: `Certificate with ID ${id} has been deleted` };
  }
}
