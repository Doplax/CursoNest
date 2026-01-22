import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class BrandsService {

  private brands: Brand [] = [
    {
      id: uuid(),
      name: 'Toyoya',
      createdAt: new Date().getTime()
    }
  ]

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime()
    }
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const Brand = this.brands.find(brand => brand.id === id);
    if (!Brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return Brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        return {
          ...brand,
          ...updateBrandDto
        }
      }
      return brand;
    })
    return brand;
  }

  remove(id: string ) {
    this.brands = this.brands.filter(brand => brand.id !== id);
    return {
      message: `Brand with id ${id} has been removed`
    }
  }

  fillBrandsWithSeedData( brands: Brand[] ) {
    this.brands = brands;
  }
}


