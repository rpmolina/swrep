import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsController } from './people.controller';
import { PlanetsService } from './people.service';

describe('PlanetsController', () => {
  let controller: PlanetsController;

  const mockPlanetsService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetsController],
      providers: [{ provide: PlanetsService, useValue: mockPlanetsService }],
    }).compile();

    controller = module.get<PlanetsController>(PlanetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
