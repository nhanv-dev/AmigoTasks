import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export const baseSchemaOptions = {
  timestamps: true,
  id: true,
  toJSON: {
    transform(doc: any, ret: any) {
      ret.id = ret._id;
      delete ret._id
    },
  },
};

@Schema({ ...baseSchemaOptions })
export class BaseEntity {
  id?: string;
  _id: mongoose.Types.ObjectId;

  @Prop({ default: null })
  createdAt: Date;
  @Prop({ default: null })
  updatedAt: Date;
  @Prop({ default: null })
  deletedAt: Date;
}
