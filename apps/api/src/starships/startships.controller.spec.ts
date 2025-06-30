import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsController } from './startships.controller';
import { StarshipsService } from './startships.service';

describe('StarshipsController', () => {
  let controller: StarshipsController;

  const mockStarshipsService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarshipsController],
      providers: [
        { provide: StarshipsService, useValue: mockStarshipsService },
      ],
    }).compile();

    controller = module.get<StarshipsController>(StarshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
