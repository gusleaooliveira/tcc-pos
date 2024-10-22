import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SendEmailService } from './send-email.service';
import { CreateSendEmailDto } from './dto/create-send-email.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('send-email')
@Controller('send-email')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}

  
}
