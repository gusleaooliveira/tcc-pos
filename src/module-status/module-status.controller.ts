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
import { CreateModuleStatusDto } from './dto/create-module-status.dto';
import { UpdateModuleStatusDto } from './dto/update-module-status.dto';
import { ModuleStatusService } from './module-status.service';

@ApiTags('modules-status')
@Controller('modules-status')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
export class ModuleStatusController {
  constructor(private readonly moduleStatusService: ModuleStatusService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new module-status' })
  create(@Body() createModuleStatusDto: CreateModuleStatusDto) {
    return this.moduleStatusService.create(createModuleStatusDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all module-statuses' })
  findAll() {
    return this.moduleStatusService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific module-status by ID' })
  findOne(@Param('id') id: string) {
    return this.moduleStatusService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an module-status' })
  update(
    @Param('id') id: string,
    @Body() updateModuleStatusDto: UpdateModuleStatusDto
  ) {
    return this.moduleStatusService.update(id, updateModuleStatusDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an module-status' })
  remove(@Param('id') id: string) {
    return this.moduleStatusService.remove(id);
  }
}
