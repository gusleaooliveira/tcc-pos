import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';
import {
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DocumentService {
  private s3Client: S3Client;

  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>
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

  async create(createDocumentDto: CreateDocumentDto): Promise<Document> {
    const document = this.documentRepository.create(createDocumentDto);
    return await this.documentRepository.save(document);
  }

  async findAll(): Promise<Document[]> {
    return await this.documentRepository.find();
  }

  async findOne(id: string) {
    const image = await this.documentRepository.findOneBy({ id });

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

  async findMany(complementary_materials: string[]) {
    return await Promise.all(
      complementary_materials.map(async (id) => {
        return await this.findOneById(id);
      })
    );
  }

  async findOneById(id: string): Promise<Document> {
    const document = await this.documentRepository.findOneBy({ id });
    if (!document) {
      throw new NotFoundException(`Document with ID ${id} not found`);
    }
    return document;
  }

  async update(
    id: string,
    updateDocumentDto: UpdateDocumentDto
  ): Promise<Document> {
    await this.documentRepository.update(id, updateDocumentDto);
    const updatedDocument = await this.findOneById(id);
    return updatedDocument;
  }

  async remove(id: string): Promise<{ message: string }> {
    const document = await this.documentRepository.findOneBy({ id });
    if (!document) {
      throw new NotFoundException(`Documento com ID ${id} não encontrado`);
    }

    // Apagar o documento do AWS S3
    const deleteCommand = new DeleteObjectCommand({
      Bucket: this.configService.get('BUCKET_NAME'),
      Key: document.title,
    });

    try {
      await this.s3Client.send(deleteCommand);
    } catch (error) {
      throw new Error(`Erro ao apagar o documento do S3: ${error.message}`);
    }

    // Apagar o registro do banco de dados
    await this.documentRepository.delete(id);

    return {
      message: `Documento com ID ${id} apagado do banco de dados e do S3`,
    };
  }

  async removeMany(documents: string[]) {
    return await Promise.all(
      documents.map(async (id) => {
        return await this.remove(id);
      })
    );
  }
}
