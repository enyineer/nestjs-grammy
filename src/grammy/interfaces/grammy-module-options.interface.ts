import { BotConfig, Context, ErrorHandler } from 'grammy';

export interface GrammyModuleOptions<C extends Context> {
  botToken: string;
  botConfig?: BotConfig<C>;
  errorHandler?: ErrorHandler<C>;
}
