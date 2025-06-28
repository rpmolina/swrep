import { Test, TestingModule } from '@nestjs/testing';
import { PeopleService } from './people.service';
import { SwapiService } from 'src/swapi/swapi.service';
import { SwapiResourceEnum } from 'src/swapi/types';

describe('PlanetsService', () => {
  let peopleService: PeopleService;
  let swapiService: SwapiService;

  const mockSwapiService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PeopleService,
        {
          provide: SwapiService,
          useValue: mockSwapiService,
        },
      ],
    }).compile();

    peopleService = module.get<PeopleService>(PeopleService);
    swapiService = module.get<SwapiService>(SwapiService);
  });

  it('should call swapiService.findAll with PEOPLE', async () => {
    const findAllSpy = jest.spyOn(swapiService, 'findAll');
    await peopleService.findAll();
    expect(findAllSpy).toHaveBeenCalledWith(SwapiResourceEnum.PEOPLE);
  });

  it('should call swapiService.findOne with PEOPLE and id', async () => {
    const findOneSpy = jest.spyOn(swapiService, 'findOne');
    await peopleService.findOne('1');
    expect(findOneSpy).toHaveBeenCalledWith(SwapiResourceEnum.PEOPLE, '1');
  });
});
