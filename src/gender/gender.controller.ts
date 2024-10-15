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
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { GenderService } from './gender.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('gender')
@Controller('gender')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new gender' })
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all genderes' })
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific gender by ID' })
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an gender' })
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(id, updateGenderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an gender' })
  remove(@Param('id') id: string) {
    return this.genderService.remove(id);
  }
}
