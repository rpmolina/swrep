import { Module } from '@nestjs/common';
import { StarshipsService } from './startships.service';
import { StarshipsController } from './startships.controller';
import { SwapiModule } from 'src/swapi/swapi.module';

@Module({
  imports: [SwapiModule],
  controllers: [StarshipsController],
  providers: [StarshipsService],
})
export class StarshipsModule {}
