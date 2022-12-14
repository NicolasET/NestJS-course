import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';
import { Cars } from './interfaces/cars.interfaces';

@Injectable()
export class CarsService {
  private cars: Cars[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id: ${id} is not found`);
    return car;
  }

  create(createCarDTO: CreateCarDTO) {
    const car: Cars = {
      id: uuid(),
      ...createCarDTO,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDTO: UpdateCarDTO) {
    let carDB = this.findById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...car, ...updateCarDTO, id };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  fillData(cars: Cars[]) {
    this.cars = cars;
  }
}
