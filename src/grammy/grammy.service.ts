import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Api, Bot, Composer, Context, RawApi } from 'grammy';
import { GrammyModuleOptions } from './interfaces/grammy-module-options.interface';

@Injectable()
export class GrammyService<C extends Context> implements OnModuleInit {
  private readonly bot: Bot<C>;
  private readonly logger: Logger = new Logger(GrammyService.name);

  constructor(
    @Inject('GRAMMY_OPTIONS') private options: GrammyModuleOptions<C>,
  ) {
    this.bot = new Bot(options.botToken, options.botConfig);
  }

  async onModuleInit() {
    this.logger.log('Starting bot...');
    if (this.options.errorHandler !== undefined) {
      this.bot.errorHandler = this.options.errorHandler;
    }
    await this.bot.init();
    this.bot.start();
    this.logger.log(`Bot ${this.bot.botInfo.username} started!`);
  }

  registerComposer(composer: Composer<C>) {
    this.bot.use(composer);
  }

  api(): Api<RawApi> {
    return this.bot.api;
  }
}
