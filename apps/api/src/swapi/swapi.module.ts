import { Module } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [SwapiService],
  exports: [SwapiService],
})
export class SwapiModule {}
