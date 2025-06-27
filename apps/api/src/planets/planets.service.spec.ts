import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsService } from './planets.service';
import { SwapiService } from 'src/swapi/swapi.service';
import { SwapiResourceEnum } from 'src/swapi/types';

describe('PlanetsService', () => {
  let planetsService: PlanetsService;
  let swapiService: SwapiService;

  const mockSwapiService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanetsService,
        {
          provide: SwapiService,
          useValue: mockSwapiService,
        },
      ],
    }).compile();

    planetsService = module.get<PlanetsService>(PlanetsService);
    swapiService = module.get<SwapiService>(SwapiService);
  });

  it('should call swapiService.findAll with PLANETS', async () => {
    const findAllSpy = jest.spyOn(swapiService, 'findAll');
    await planetsService.findAll();
    expect(findAllSpy).toHaveBeenCalledWith(SwapiResourceEnum.PLANETS);
  });

  it('should call swapiService.findOne with PLANETS and id', async () => {
    const findOneSpy = jest.spyOn(swapiService, 'findOne');
    await planetsService.findOne('1');
    expect(findOneSpy).toHaveBeenCalledWith(SwapiResourceEnum.PLANETS, '1');
  });
});
