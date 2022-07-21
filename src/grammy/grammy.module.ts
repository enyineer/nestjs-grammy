import { DynamicModule, Module } from '@nestjs/common';
import { Context } from 'grammy';
import { GrammyService } from './grammy.service';
import { GrammyModuleOptions } from './interfaces/grammy-module-options.interface';

@Module({})
export class GrammyModule {
  static forRoot(options: GrammyModuleOptions<Context>): DynamicModule {
    return {
      module: GrammyModule,
      providers: [
        {
          provide: 'GRAMMY_OPTIONS',
          useValue: options,
        },
        GrammyService,
      ],
      exports: [GrammyService],
      global: true,
    };
  }
}
