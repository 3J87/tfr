import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Place } from './places/entities/place.entity';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      storage: 'database.sqlite',
      dialect: 'sqlite',
      synchronize: true,
      autoLoadModels: true,
      models: [Place],
    }),
    PlacesModule,
  ],
})
export class AppModule {}
