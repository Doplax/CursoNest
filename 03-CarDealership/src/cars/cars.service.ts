import { CreateCarDto, UpdateCarDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid'

@Injectable()
export class CarsService {

    private carsList: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla' 
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic' 
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee' 
        },
    ];


    findAll() {
        return this.carsList;
    }

    findOneById( id: string ) {
        const car = this.carsList.find( car => car.id === id );
        if ( !car ) throw new NotFoundException(`Car with id '${ id }' not found`);
        
        return car;
    }

    create( CreateCarDto: CreateCarDto ) {
        const newCar: Car = {
            id: uuid(),
            ...CreateCarDto
        };

        this.carsList.push( newCar );
        return newCar;
    }

    update( id: string, updateCarDto: UpdateCarDto ) {
        let findCar = this.carsList.find( car => car.id === id );

        return updateCarDto;
    }

}
