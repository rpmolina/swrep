import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { PlanetDto } from 'src/swapi/dto/planet.dto';
import { of } from 'rxjs';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { throwError } from 'rxjs';
import { Logger } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { SwapiResourceEnum } from './types';
import { ConfigModule } from '@nestjs/config';

const mockHttpService = {
  get: jest.fn(),
};

describe('SwapiService', () => {
  beforeAll(() => {
    jest.spyOn(Logger.prototype, 'error').mockImplementation(() => {});
    jest.spyOn(Logger.prototype, 'warn').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  let service: SwapiService;
  let httpService: HttpService;

  const mockPlanet: PlanetDto = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    residents: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [
        SwapiService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    service = module.get<SwapiService>(SwapiService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should return a list of planets', async () => {
    const response: AxiosResponse<PlanetDto[]> = {
      data: [mockPlanet],
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json',
      },
      config: {
        headers: new AxiosHeaders({
          'content-type': 'application/json',
        }),
      },
    };

    jest.spyOn(httpService, 'get').mockReturnValue(of(response));

    const result = await service.findAll(SwapiResourceEnum.PLANETS);
    expect(result).toEqual([mockPlanet]);
  });

  it('should throw an error if the request fails', async () => {
    jest
      .spyOn(httpService, 'get')
      .mockReturnValue(throwError(() => new Error('Request failed')));

    await expect(service.findAll(SwapiResourceEnum.PLANETS)).rejects.toThrow(
      'Failed to fetch planets from SWAPI',
    );
  });
});
