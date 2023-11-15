import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from './application/application.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/nest-app?authSource=admin',
    ),
    ApplicationModule,
    GroupModule,
  ],
})
export class AppModule {}
