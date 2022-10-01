import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { TestingModule } from './testing/testing.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule, TestingModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
