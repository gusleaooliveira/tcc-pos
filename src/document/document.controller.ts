import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@ApiTags('document')
@Controller('document')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new document' })
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentService.create(createDocumentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all documentes' })
  findAll() {
    return this.documentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific document by ID' })
  findOne(@Param('id') id: string) {
    return this.documentService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an document' })
  update(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto
  ) {
    return this.documentService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an document' })
  remove(@Param('id') id: string) {
    return this.documentService.remove(id);
  }
}
