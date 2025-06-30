import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsService } from './startships.service';
import { SwapiService } from 'src/swapi/swapi.service';
import { SwapiResourceEnum } from 'src/swapi/types';

describe('StarshipsService', () => {
  let starshipsService: StarshipsService;
  let swapiService: SwapiService;

  const mockSwapiService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StarshipsService,
        {
          provide: SwapiService,
          useValue: mockSwapiService,
        },
      ],
    }).compile();

    starshipsService = module.get<StarshipsService>(StarshipsService);
    swapiService = module.get<SwapiService>(SwapiService);
  });

  it('should call swapiService.findAll with PLANETS', async () => {
    const findAllSpy = jest.spyOn(swapiService, 'findAll');
    await starshipsService.findAll();
    expect(findAllSpy).toHaveBeenCalledWith(SwapiResourceEnum.STARSHIPS);
  });

  it('should call swapiService.findOne with PLANETS and id', async () => {
    const findOneSpy = jest.spyOn(swapiService, 'findOne');
    await starshipsService.findOne('1');
    expect(findOneSpy).toHaveBeenCalledWith(SwapiResourceEnum.STARSHIPS, '1');
  });
});
