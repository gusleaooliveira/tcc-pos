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
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PlanService } from './plan.service';

@ApiTags('plan')
@Controller('plan')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new plan' })
  create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all planes' })
  findAll() {
    return this.planService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific plan by ID' })
  findOne(@Param('id') id: string) {
    return this.planService.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an plan' })
  update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(id, updatePlanDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an plan' })
  remove(@Param('id') id: string) {
    return this.planService.remove(id);
  }

  @Post(':id/payment-link')
  async createPaymentLink(@Param('id') id: string): Promise<{ paymentLink: string }> {
    const paymentLink = await this.planService.createPaymentLink(id);
    return { paymentLink };
  }
}
