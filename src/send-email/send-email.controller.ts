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

  @Post('payment-confirmation')
  @ApiOperation({ summary: 'Send payment confirmation email' })
  async sendPaymentConfirmationEmail(@Body() body: CreateSendEmailDto) {
    const { to, userName, linkPassword } = body;

    if (!to) {
      throw new BadRequestException('No recipient defined');
    }

    if (!userName || !linkPassword) {
      throw new BadRequestException(
        'Invalid data: userName or linkPassword missing'
      );
    }

    const emailData = {
      userName,
      linkPassword,
    };

    return await this.sendEmailService.sendPaymentConfirmationEmail(
      to,
      emailData
    );
  }
}
