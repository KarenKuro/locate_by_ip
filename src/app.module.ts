import { Module } from '@nestjs/common';

import { LocationModule } from './resources';

@Module({
  imports: [LocationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
