import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/common/entities/base.entity';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ ...baseSchemaOptions, collection: 'comments' })
export class Comment extends BaseEntity {
  @Prop({ required: true })
  content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
