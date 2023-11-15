import { Injectable } from '@nestjs/common';
import { Group } from './schemas/Group';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group.name) private groupModel: Model<Group>) {}

  async getGroupAll(): Promise<Group[]> {
    return await this.groupModel.find();
  }

  async getGroupById(id: string): Promise<Group> {
    return await this.groupModel.findById(id);
  }

  async createGroup(createGroupDto: CreateGroupDto): Promise<Group> {
    const groupCreated = new this.groupModel(createGroupDto);
    return await groupCreated.save();
  }

  async updateGroupById(
    id: string,
    updateGroupDto: UpdateGroupDto,
  ): Promise<Group> {
    const group = await this.groupModel.findById(id);
    if (updateGroupDto.description) {
      group.description = updateGroupDto.description;
    }
    if (updateGroupDto.name) {
      group.name = updateGroupDto.name;
    }
    return await group.save();
  }

  async deleteGroupById(id: string): Promise<Group> {
    return await this.groupModel.findByIdAndDelete(id);
  }
}
