import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Composer, Context } from 'grammy';
import { GrammyService } from '../../grammy/grammy.service';

@Injectable()
export class StartService implements OnModuleInit {
  private logger: Logger = new Logger(StartService.name);
  private composer: Composer<Context> = new Composer();

  constructor(private grammyService: GrammyService<Context>) {}

  async onModuleInit() {
    this.composer.command('start', async (ctx) => {
      ctx.reply('Welcome!');
    });

    this.grammyService.registerComposer(this.composer);
  }
}
