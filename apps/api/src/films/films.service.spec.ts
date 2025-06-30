import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { SwapiService } from 'src/swapi/swapi.service';
import { SwapiResourceEnum } from 'src/swapi/types';

describe('FilmsService', () => {
  let filmsService: FilmsService;
  let swapiService: SwapiService;

  const mockSwapiService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilmsService,
        {
          provide: SwapiService,
          useValue: mockSwapiService,
        },
      ],
    }).compile();

    filmsService = module.get<FilmsService>(FilmsService);
    swapiService = module.get<SwapiService>(SwapiService);
  });

  it('should call swapiService.findAll with FILMS', async () => {
    const findAllSpy = jest.spyOn(swapiService, 'findAll');
    await filmsService.findAll();
    expect(findAllSpy).toHaveBeenCalledWith(SwapiResourceEnum.FILMS);
  });

  it('should call swapiService.findOne with FILMS and id', async () => {
    const findOneSpy = jest.spyOn(swapiService, 'findOne');
    await filmsService.findOne('1');
    expect(findOneSpy).toHaveBeenCalledWith(SwapiResourceEnum.FILMS, '1');
  });
});
