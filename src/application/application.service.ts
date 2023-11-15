import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { App } from 'src/application/schemas/Application';

@Injectable()
export class ApplicationService {
  constructor(@InjectModel(App.name) private appModel: Model<App>) {}

  async getApplications(): Promise<App[]> {
    return this.appModel.find().exec();
  }

  async createAppication(createAppDto: { name: string }): Promise<App> {
    const createApp = new this.appModel(createAppDto);
    return createApp.save();
  }
}
