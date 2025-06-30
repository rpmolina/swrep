import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesController } from './species.controller';
import { SwapiModule } from 'src/swapi/swapi.module';

@Module({
  imports: [SwapiModule],
  controllers: [SpeciesController],
  providers: [SpeciesService],
})
export class SpeciesModule {}
