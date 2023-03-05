import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Place } from './entities/place.entity';

@ApiTags('places')
@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Place,
  })
  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  async findAll() {
    return await this.placesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.placesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(+id, updatePlaceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.placesService.remove(+id);
  }
}
