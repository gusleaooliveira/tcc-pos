import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageService } from './image.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new image' })
  async create(@Body() createImageDto: CreateImageDto) {
    return await this.imageService.create(createImageDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all images' })
  async findAll() {
    return await this.imageService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific image by ID' })
  async findOne(@Param('id') id: string, @Res() res: any) {
    return await this.imageService.findOne(id, res);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update an image' })
  async update(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto
  ) {
    return await this.imageService.update(id, updateImageDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete an image' })
  async remove(@Param('id') id: string) {
    return await this.imageService.remove(id);
  }
}
