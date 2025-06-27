import { Injectable, Logger, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ConfigService } from '@nestjs/config';
import { SwapiResourceEnum, SwapiResourceMapDto } from './types';

@Injectable()
export class SwapiService {
  private readonly logger = new Logger(SwapiService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private baseUrl(resource: SwapiResourceEnum) {
    const baseUrl = this.configService.get<string>('SWAPI_BASE_URL');
    return `${baseUrl}/${resource}`;
  }

  private errorMessage(resource: SwapiResourceEnum, error: AxiosError) {
    const message = `Failed to fetch ${resource} from SWAPI: ${String(
      error?.response?.data,
    )}`;
    this.logger.error(message);
    return message;
  }

  async findAll<T extends SwapiResourceEnum>(
    resource: T,
  ): Promise<SwapiResourceMapDto[T][]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<SwapiResourceMapDto[T][]>(this.baseUrl(resource))
        .pipe(
          catchError((error: AxiosError) => {
            const errorMessage = this.errorMessage(resource, error);
            throw new HttpException(
              errorMessage,
              error.response?.status || 500,
            );
          }),
        ),
    );
    return data;
  }

  async findOne<T extends SwapiResourceEnum>(
    resource: T,
    id: string,
  ): Promise<SwapiResourceMapDto[T]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<SwapiResourceMapDto[T]>(this.baseUrl(resource) + '/' + id)
        .pipe(
          catchError((error: AxiosError) => {
            const errorMessage = this.errorMessage(resource, error);
            throw new HttpException(
              errorMessage,
              error.response?.status || 500,
            );
          }),
        ),
    );
    return data;
  }
}
