import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserPlanStatusDto {
  @ApiProperty({ description: 'ID of the user', example: '1' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ description: 'ID of the plan', example: '1' })
  @IsString()
  @IsNotEmpty()
  planId: string;

  @ApiProperty({
    description: 'Whether the plan is enabled for the user',
    example: true,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  is_enabled: boolean = false;

  @ApiProperty({
    description: 'Status of the plan',
    example: 'pending',
    default: 'pending',
  })
  @IsString()
  @IsOptional()
  status: string = 'pending';
}
