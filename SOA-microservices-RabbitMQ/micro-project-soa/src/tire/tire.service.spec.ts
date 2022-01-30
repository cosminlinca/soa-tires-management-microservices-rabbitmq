import { Test, TestingModule } from '@nestjs/testing';
import { TireService } from './tire.service';

describe('TireService', () => {
  let service: TireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TireService],
    }).compile();

    service = module.get<TireService>(TireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
