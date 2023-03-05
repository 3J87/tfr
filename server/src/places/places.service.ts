import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place)
    private placeRepository: typeof Place,
  ) {}

  async create(createPlaceDto: CreatePlaceDto) {
    return await this.placeRepository.create(createPlaceDto);
  }

  async findAll() {
    return (await this.placeRepository.findAll()).slice(0, 200);
  }

  async findOne(id: number) {
    return await this.placeRepository.findByPk(id);
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return await this.placeRepository.update(updatePlaceDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.placeRepository.destroy({
      where: { id },
    });
  }
}
