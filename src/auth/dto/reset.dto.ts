import { ApiProperty } from "@nestjs/swagger";

export class ResetDto { 
    @ApiProperty() 
    token: string; 
    @ApiProperty()
    new_password: string 
}