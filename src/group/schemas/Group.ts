import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { App } from 'src/application/schemas/Application';

export type GroupDocument = HydratedDocument<Group>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Group {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop({ type: [mongoose.Types.ObjectId], ref: 'App' })
  applications: App[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
