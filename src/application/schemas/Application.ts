import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AppDocument = HydratedDocument<App>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class App {
  @Prop()
  name: string;
  @Prop()
  description: string;
}

export const AppSchema = SchemaFactory.createForClass(App);
