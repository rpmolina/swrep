import { Test, TestingModule } from '@nestjs/testing';
import { SpeciesService } from './species.service';
import { SwapiService } from 'src/swapi/swapi.service';
import { SwapiResourceEnum } from 'src/swapi/types';

describe('SpeciesService', () => {
  let speciesService: SpeciesService;
  let swapiService: SwapiService;

  const mockSwapiService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpeciesService,
        {
          provide: SwapiService,
          useValue: mockSwapiService,
        },
      ],
    }).compile();

    speciesService = module.get<SpeciesService>(SpeciesService);
    swapiService = module.get<SwapiService>(SwapiService);
  });

  it('should call swapiService.findAll with SPECIES', async () => {
    const findAllSpy = jest.spyOn(swapiService, 'findAll');
    await speciesService.findAll();
    expect(findAllSpy).toHaveBeenCalledWith(SwapiResourceEnum.SPECIES);
  });

  it('should call swapiService.findOne with SPECIES and id', async () => {
    const findOneSpy = jest.spyOn(swapiService, 'findOne');
    await speciesService.findOne('1');
    expect(findOneSpy).toHaveBeenCalledWith(SwapiResourceEnum.SPECIES, '1');
  });
});
