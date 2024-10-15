import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('user')
@Controller('user')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  async createDiferenciado(
    @Body() createUserDto: any
  ) {
    console.log(createUserDto);
    
    return await this.userService.createDiferenciado(createUserDto);
  }


  // @Post('/old')
  // @ApiOperation({ summary: 'Criar um novo usuário' })
  // async create(@Body() createUserDto: CreateUserDto) {

  

  //   return await this.userService.create(createUserDto);
  // }

  

  @Put('change-password/:id')
  async changePassword(
    @Param('id') id: string,
    @Body() changePasswordDto: { password: string }
  ) {
    return await this.userService.changePassword(id, changePasswordDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obter todos os usuários' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um usuário específico por ID' })
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Atualizar um usuário' })
  async updateDiferenciado(
    @Param('id') id: string,
    @Body() user: UpdateUserDto
  ): Promise<User> {
    return await this.userService.updateDiferenciado(id, user);
  }

  @Put('/old/:id')
  @ApiOperation({ summary: 'Atualizar um usuário' })
  async update(
    @Param('id') id: string,
    @Body() user: UpdateUserDto
  ): Promise<User> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um usuário' })
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
