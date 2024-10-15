import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWebhookDto {
  @IsString()
  @IsNotEmpty()
  event: string;

  @IsString()
  @IsNotEmpty()
  payload: string;
}
