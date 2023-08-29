import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export const baseSchemaOptions = {
  id: true,
  timestamps: true,
  toJSON: {
    transform(doc: any, ret: any) {
      ret.id = ret._id;
    },
  },
};

@Schema({ ...baseSchemaOptions })
export class BaseEntity {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: mongoose.Types.ObjectId;

  id?: string;

  @Prop({ default: null })
  createdAt: Date;

  @Prop({ default: null })
  updatedAt: Date;

  @Prop({ default: null })
  deletedAt: Date;
}

