import { Module } from '@nestjs/common';
import { StartService } from './start/start.service';

@Module({
  providers: [StartService],
})
export class ComposersModule {}
