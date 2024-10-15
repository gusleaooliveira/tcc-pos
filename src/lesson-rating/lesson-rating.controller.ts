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
import { CreateLessonRatingDto } from './dto/create-lesson-rating.dto';
import { UpdateLessonRatingDto } from './dto/update-lesson-rating.dto';
import { LessonRatingService } from './lesson-rating.service';

@ApiTags('lessons-rating')
@Controller('lessons-rating')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class LessonRatingController {
  constructor(private readonly lessonRatingService: LessonRatingService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new lessonRating' })
  create(@Body() createLessonRatingDto: CreateLessonRatingDto) {
    return this.lessonRatingService.create(createLessonRatingDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all lessonRatinges' })
  findAll() {
    return this.lessonRatingService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific lessonRating by ID' })
  findOne(@Param('id') id: string) {
    return this.lessonRatingService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an lessonRating' })
  update(
    @Param('id') id: string,
    @Body() updateLessonRatingDto: UpdateLessonRatingDto
  ) {
    return this.lessonRatingService.update(id, updateLessonRatingDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an lessonRating' })
  remove(@Param('id') id: string) {
    return this.lessonRatingService.remove(id);
  }
}
