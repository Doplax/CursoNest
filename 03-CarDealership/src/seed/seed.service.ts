import { CARS_SEED } from './data/cars.seed';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {

  //CARS_SEED
  populateDB(){
    return 'Seed executed';
  }
}
