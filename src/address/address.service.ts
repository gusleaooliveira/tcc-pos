import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>
  ) {}

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const address = this.addressRepository.create(createAddressDto);
    return await this.addressRepository.save(address);
  }

  async findAll(): Promise<Address[]> {
    return await this.addressRepository.find();
  }

  async findOne(id: string): Promise<Address> {
    const address = await this.addressRepository.findOneBy({ id });
    if (!address) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
    return address;
  }

  async update(
    id: string,
    updateAddressDto: UpdateAddressDto
  ): Promise<Address> {
    await this.addressRepository.update(id, updateAddressDto);
    const updatedAddress = await this.findOne(id);
    return updatedAddress;
  }

  async remove(id: string): Promise<{ message: string }> {
    const result = await this.addressRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Address with ID ${id} not found`);
    }
    return { message: `Address with ID ${id} successfully deleted` };
  }
}
