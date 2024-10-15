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
import { CreateUserPlanStatusDto } from './dto/create-user-plan-status.dto';
import { UpdateUserPlanStatusDto } from './dto/update-user-plan-status.dto';
import { UserPlanStatusService } from './user-plan-status.service';

@ApiTags('user-plan-status')
@Controller('user-plan-status')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UserPlanStatusController {
  constructor(private readonly userPlanStatusService: UserPlanStatusService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user-plan-status' })
  create(@Body() createUserPlanStatusDto: CreateUserPlanStatusDto) {
    return this.userPlanStatusService.create(createUserPlanStatusDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all user-plan-statuses' })
  findAll() {
    return this.userPlanStatusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific user-plan-status by ID' })
  findOne(@Param('id') id: string) {
    return this.userPlanStatusService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an user-plan-status' })
  update(
    @Param('id') id: string,
    @Body() updateUserPlanStatusDto: UpdateUserPlanStatusDto
  ) {
    return this.userPlanStatusService.update(id, updateUserPlanStatusDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an user-plan-status' })
  remove(@Param('id') id: string) {
    return this.userPlanStatusService.remove(id);
  }
}
