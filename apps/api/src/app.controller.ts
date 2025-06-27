import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppInfoDto } from './app.dto';
import { AppCheckDto } from './app.dto';

@Controller()
@ApiTags('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ description: 'API information', type: AppInfoDto })
  getInfo() {
    return this.appService.getInfo();
  }

  @Get('/health')
  @ApiOkResponse({ description: 'Health check', type: AppCheckDto })
  check() {
    return this.appService.check();
  }
}
