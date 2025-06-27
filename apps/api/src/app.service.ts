import { Injectable } from '@nestjs/common';
import { name, description, version } from '../package.json';
import { AppCheckDto, AppInfoDto } from './app.dto';

@Injectable()
export class AppService {
  getInfo(): AppInfoDto {
    return {
      name: name as string,
      description: description as string,
      version: version as string,
      timestamp: new Date().toISOString(),
    };
  }

  check(): AppCheckDto {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
