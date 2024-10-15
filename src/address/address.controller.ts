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
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AuthGuard } from '@nestjs/passport'; // Importando o guard de autenticação
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiTags('address')
@Controller('address')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  // Adicionando autenticação ao método create
  @ApiOperation({ summary: 'Create a new address' })
  async create(@Body() createAddressDto: CreateAddressDto) {
    return await this.addressService.create(createAddressDto);
  }

  @Get()
  // Adicionando autenticação ao método findAll
  @ApiOperation({ summary: 'Get all addresses' })
  async findAll() {
    return await this.addressService.findAll();
  }

  @Get(':id')
  // Adicionando autenticação ao método findOne
  @ApiOperation({ summary: 'Get a specific address by ID' })
  async findOne(@Param('id') id: string) {
    return await this.addressService.findOne(id);
  }

  @Put(':id')
  // Adicionando autenticação ao método update
  @ApiOperation({ summary: 'Update an address' })
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto
  ) {
    return await this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  // Adicionando autenticação ao método remove
  @ApiOperation({ summary: 'Delete an address' })
  async remove(@Param('id') id: string) {
    return await this.addressService.remove(id);
  }
}
