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
import { CreateLessonProgressDto } from './dto/create-lesson-progress.dto';
import { UpdateLessonProgressDto } from './dto/update-lesson-progress.dto';
import { LessonProgressService } from './lesson-progress.service';

@ApiTags('lessons-progress')
@Controller('lessons-progress')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
export class LessonProgressController {
  constructor(private readonly lessonProgressService: LessonProgressService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new lessonProgress' })
  create(@Body() createLessonProgressDto: CreateLessonProgressDto) {
    return this.lessonProgressService.create(createLessonProgressDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all lessonProgresses' })
  findAll() {
    return this.lessonProgressService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific lessonProgress by ID' })
  findOne(@Param('id') id: string) {
    return this.lessonProgressService.findOne(id);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an lessonProgress' })
  updateLessonProgress(
    @Body() createLessonProgressDto: CreateLessonProgressDto,
  ) {
    return this.lessonProgressService.createOrUpdate(createLessonProgressDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an lessonProgress' })
  update(
    @Param('id') id: string,
    @Body() updateLessonProgressDto: UpdateLessonProgressDto,
  ) {
    return this.lessonProgressService.update(id, updateLessonProgressDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an lessonProgress' })
  remove(@Param('id') id: string) {
    return this.lessonProgressService.remove(id);
  }
}
