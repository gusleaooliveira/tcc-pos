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
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ModuleService } from './module.service';

@ApiTags('modules')
@Controller('modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new module' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createModuleDto: CreateModuleDto) {
    return this.moduleService.create(createModuleDto);
  }

  @Get('/home')
  @ApiOperation({ summary: 'Get all modules for home' })
  findAllForHome() {
    return this.moduleService.findAllForHome();
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all modulees' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.moduleService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific module by ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.moduleService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an module' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
    return this.moduleService.update(id, updateModuleDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an module' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.moduleService.remove(id);
  }
}
