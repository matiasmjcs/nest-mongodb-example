import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/nest-app?authSource=admin',
    ),
    ApplicationModule,
  ],
})
export class AppModule {}
