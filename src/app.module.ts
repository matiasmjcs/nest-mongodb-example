import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from './application/application.module';
import { GroupModule } from './group/group.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    ApplicationModule,
    GroupModule,
  ],
})
export class AppModule {}
