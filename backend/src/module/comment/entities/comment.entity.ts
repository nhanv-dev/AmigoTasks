import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  BaseEntity,
  baseSchemaOptions,
} from 'src/module/common/entities/base.entity';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ ...baseSchemaOptions, collection: 'comments' })
export class Comment extends BaseEntity {
  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  author: mongoose.Schema.Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
