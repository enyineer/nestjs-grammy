import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Context, Middleware } from 'grammy';
import { GrammyService } from '../../grammy/grammy.service';

@Injectable()
export class DebuggerService implements OnModuleInit {
  private logger: Logger = new Logger(DebuggerService.name);

  constructor(private grammyService: GrammyService<Context>) {}

  async onModuleInit() {
    const debuggerMiddleware: Middleware = async (ctx, next) => {
      this.logger.debug(
        `Received text "${ctx.message.text}" from ${ctx.from.first_name} (${ctx.from.id})`,
      );
      await next();
    };

    this.grammyService.registerMiddleware(debuggerMiddleware);
  }
}
