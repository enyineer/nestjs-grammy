import { Test, TestingModule } from '@nestjs/testing';
import { Context } from 'grammy';
import { GrammyService } from './grammy.service';

describe('GrammyService', () => {
  let service: GrammyService<Context>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrammyService],
    }).compile();

    service = module.get<GrammyService<Context>>(GrammyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
