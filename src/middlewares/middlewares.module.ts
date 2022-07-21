import { Module } from '@nestjs/common';
import { DebuggerService } from './debugger/debugger.service';

@Module({
  providers: [DebuggerService]
})
export class MiddlewaresModule {}
