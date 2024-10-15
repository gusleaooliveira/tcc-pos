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
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { CreateSocialMediaDto } from './dto/create-social-media.dto';
import { UpdateSocialMediaDto } from './dto/update-social-media.dto';
import { SocialMediaService } from './social-media.service';

@ApiTags('social-media')
@Controller('social-media')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
export class SocialMediaController {
  constructor(private readonly socialMediaService: SocialMediaService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new social-media' })
  create(@Body() createSocialMediaDto: CreateSocialMediaDto) {
    return this.socialMediaService.create(createSocialMediaDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all social-mediaes' })
  findAll() {
    return this.socialMediaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific social-media by ID' })
  findOne(@Param('id') id: string) {
    return this.socialMediaService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an social-media' })
  update(
    @Param('id') id: string,
    @Body() updateSocialMediaDto: UpdateSocialMediaDto
  ) {
    return this.socialMediaService.update(id, updateSocialMediaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an social-media' })
  remove(@Param('id') id: string) {
    return this.socialMediaService.remove(id);
  }
}
