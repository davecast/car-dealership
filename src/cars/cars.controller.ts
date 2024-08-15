import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsSercice: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsSercice.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id: id });
    return this.carsSercice.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      data: body,
      method: 'POST',
    };
  }

  @Patch(':id')
  updateCard(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return {
      data: body,
      method: 'PATCH',
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `The car with id '${id}' was deleted`,
      status: 'ok',
      method: 'DELETE',
    };
  }
}
