import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { MongooseModule } from '@nestjs/mongoose';
import { App, AppSchema } from 'src/application/schemas/Application';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: App.name,
        schema: AppSchema,
      },
    ]),
  ],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
