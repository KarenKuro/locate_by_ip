import { Module } from '@nestjs/common';

import { LocationModule } from './resources';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
