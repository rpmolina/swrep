import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetsModule } from './planets/planets.module';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config';
import { env } from './env';
import { FiltersModule } from './filters/filters.module';
import { FilmsModule } from './films/films.module';
import { StarshipsModule } from './starships/startships.module';
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [() => env],
    }),
    PlanetsModule,
    PeopleModule,
    FiltersModule,
    FilmsModule,
    StarshipsModule,
    SpeciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
