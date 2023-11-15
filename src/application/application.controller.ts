import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApplicationService } from './application.service';

@Controller('application')
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}
  @Get('')
  getApplications() {
    return this.applicationService.getApplications();
  }
  @Post('')
  createApplication(@Body() createAppDto: { name: string }) {
    return this.applicationService.createAppication(createAppDto);
  }
}
