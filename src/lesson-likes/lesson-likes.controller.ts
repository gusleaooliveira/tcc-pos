import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { CreateLessonLikesDto } from './dto/create-lesson-like.dto';
import { UpdateLessonLikesDto } from './dto/update-lesson-like.dto';
import { LessonLikesService } from './lesson-likes.service';

@ApiTags('lessons-likes')
@Controller('lessons-likes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class LessonLikesController {
  constructor(private readonly lessonLikesService: LessonLikesService) {}

  @Put('/create-or-update')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create or update a lessonLikes' })
  async createOrUpdate(@Param() body: CreateLessonLikesDto) {
    return await this.lessonLikesService.createOrUpdate(body);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new lessonLikes' })
  create(@Body() createLessonLikesDto: CreateLessonLikesDto) {
    return this.lessonLikesService.create(createLessonLikesDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all lessonLikeses' })
  findAll() {
    return this.lessonLikesService.findAll();
  }

  @Get('by-user/:lesson_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific lessonLikes by ID' })
  async findOneByLessonIdAndUser(
    @Param('lesson_id') lesson_id: string,
    @Query('user_id') user_id: string,
  ) {
    return this.lessonLikesService.findOneByLessonIdAndUser(lesson_id, user_id);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific lessonLikes by ID' })
  findOne(@Param('id') id: string) {
    return this.lessonLikesService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an lessonLikes' })
  update(
    @Param('id') id: string,
    @Body() updateLessonLikesDto: UpdateLessonLikesDto,
  ) {
    return this.lessonLikesService.update(id, updateLessonLikesDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an lessonLikes' })
  remove(@Param('id') id: string) {
    return this.lessonLikesService.remove(id);
  }
}
