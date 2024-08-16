import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// We can add pipes on controller level to any method inside
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsSercice: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsSercice.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id: id });
    return this.carsSercice.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return {
      data: this.carsSercice.create(createCarDto),
      method: 'POST',
    };
  }

  @Patch(':id')
  updateCard(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return {
      data: this.carsSercice.update(id, updateCarDto),
      method: 'PATCH',
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return {
      message: this.carsSercice.delete(id),
      method: 'DELETE',
    };
  }
}
