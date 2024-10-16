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
import { CommentaryService } from './commentary.service';
import { CreateCommentaryDto } from './dto/create-commentary.dto';
import { UpdateCommentaryDto } from './dto/update-commentary.dto';

@ApiTags('commentary')
@Controller('commentary')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CommentaryController {
  constructor(private readonly commentaryService: CommentaryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new commentary' })
  create(@Body() createCommentaryDto: CreateCommentaryDto) {
    return this.commentaryService.create(createCommentaryDto);
  }

  @Get('/lesson/:lesson_id')
  @ApiOperation({ summary: 'Get all commentaryes by lesson' })
  findAllByLesson(@Param('lesson_id') lesson_id: string) {
    return this.commentaryService.findAllByLesson(lesson_id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all commentaryes' })
  findAll() {
    return this.commentaryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific commentary by ID' })
  findOne(@Param('id') id: string) {
    return this.commentaryService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an commentary' })
  update(
    @Param('id') id: string,
    @Body() updateCommentaryDto: UpdateCommentaryDto,
  ) {
    return this.commentaryService.update(id, updateCommentaryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an commentary' })
  remove(@Param('id') id: string) {
    return this.commentaryService.remove(id);
  }
}
