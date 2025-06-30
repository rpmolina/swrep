import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { SwapiModule } from 'src/swapi/swapi.module';

@Module({
  imports: [SwapiModule],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
