import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Place } from './entities/place.entity';

@Module({
  imports: [SequelizeModule.forFeature([Place])],
  controllers: [PlacesController],
  providers: [PlacesService],
})
export class PlacesModule {}
