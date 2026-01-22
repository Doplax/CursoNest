import { CarsService } from './../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService
  ){}

  populateDB(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
  }
}
