import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateAppDto } from './dto/create-app.dto';

@Controller('application')
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}
  @Get('')
  getApplications() {
    return this.applicationService.getApplications();
  }
  @Post('')
  createApplication(@Body() createAppDto: CreateAppDto) {
    return this.applicationService.createAppication(createAppDto);
  }
}
