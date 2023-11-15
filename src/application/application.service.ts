import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App } from 'src/application/schemas/Application';
import { CreateAppDto } from './dto/create-app.dto';

@Injectable()
export class ApplicationService {
  constructor(@InjectModel(App.name) private appModel: Model<App>) {}

  async getApplications(): Promise<App[]> {
    return this.appModel.find().exec();
  }

  async createAppication(createAppDto: CreateAppDto): Promise<App> {
    const createApp = new this.appModel(createAppDto);
    return createApp.save();
  }
}
