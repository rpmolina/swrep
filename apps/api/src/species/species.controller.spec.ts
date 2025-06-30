import { Test, TestingModule } from '@nestjs/testing';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';

describe('SpeciesController', () => {
  let controller: SpeciesController;

  const mockSpeciesService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpeciesController],
      providers: [{ provide: SpeciesService, useValue: mockSpeciesService }],
    }).compile();

    controller = module.get<SpeciesController>(SpeciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
