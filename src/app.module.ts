import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrammyModule } from './grammy/grammy.module';
import { ComposersModule } from './composers/composers.module';
import { ConfigModule } from '@nestjs/config';
import { MiddlewaresModule } from './middlewares/middlewares.module';

const logger: Logger = new Logger('AppModule');

@Module({
  imports: [
    ConfigModule.forRoot(),
    GrammyModule.forRoot({
      botToken: process.env.BOT_TOKEN,
      errorHandler: (err) => {
        logger.error(err.message);
      },
    }),
    MiddlewaresModule,
    ComposersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
