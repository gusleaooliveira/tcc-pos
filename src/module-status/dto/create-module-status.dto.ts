import { ApiProperty } from '@nestjs/swagger';

export class CreateModuleStatusDto {
  @ApiProperty({ description: 'Module ID', example: 1 })
  module_id: number;

  @ApiProperty({ description: 'User ID', example: 1 })
  user_id: number;

  @ApiProperty({ description: 'Quantity of lessons completed', example: 5 })
  quantity_completed: number;

  @ApiProperty({
    description: 'Indicates if the module is completed',
    example: false,
  })
  is_completed: boolean;

  @ApiProperty({ description: 'Certificate ID', example: 1 })
  certificate_id: number;
}
