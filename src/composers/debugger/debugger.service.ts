import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Composer, Context } from 'grammy';
import { GrammyService } from '../../grammy/grammy.service';

@Injectable()
export class DebuggerService implements OnModuleInit {
  private logger: Logger = new Logger(DebuggerService.name);
  private composer: Composer<Context> = new Composer();

  constructor(private grammyService: GrammyService<Context>) {}

  async onModuleInit() {
    this.composer.on(':text', async (ctx, next) => {
      this.logger.debug(
        `Received text "${ctx.message.text}" from ${ctx.from.first_name} (${ctx.from.id})`,
      );
      await next();
    });

    this.grammyService.registerComposer(this.composer);
  }
}
