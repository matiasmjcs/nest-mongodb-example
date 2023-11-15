import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}
  @Get('')
  getGroupAll() {
    return this.groupService.getGroupAll();
  }
  @Get(':id')
  getGroupById(@Param('id') id: string) {
    return this.groupService.getGroupById(id);
  }

  @Post('')
  createGroup(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.createGroup(createGroupDto);
  }

  @Patch(':id')
  updateGroup(@Body() updateGroupDto: UpdateGroupDto, @Param('id') id: string) {
    return this.groupService.updateGroupById(id, updateGroupDto);
  }

  @Delete(':id')
  deleteGroup(@Param('id') id: string) {
    return this.groupService.deleteGroupById(id);
  }
}
