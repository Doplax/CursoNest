import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populateDB(){
    return 'Populating the database with seed data';
  }
}
