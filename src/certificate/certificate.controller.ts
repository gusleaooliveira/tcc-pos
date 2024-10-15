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
import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('certificate')
@Controller('certificate')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new certificate' })
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificateService.create(createCertificateDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all certificatees' })
  findAll() {
    return this.certificateService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific certificate by ID' })
  findOne(@Param('id') id: string) {
    return this.certificateService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an certificate' })
  update(
    @Param('id') id: string,
    @Body() updateCertificateDto: UpdateCertificateDto
  ) {
    return this.certificateService.update(id, updateCertificateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an certificate' })
  remove(@Param('id') id: string) {
    return this.certificateService.remove(id);
  }
}
