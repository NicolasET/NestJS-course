import { Cars } from '../../cars/interfaces/cars.interfaces';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Cars[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Spark',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
