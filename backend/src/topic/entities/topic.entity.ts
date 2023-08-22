import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { BaseEntity, baseSchemaOptions } from "src/common/entities/base.entity";
import * as slugGenerator from 'mongoose-slug-generator';

export enum TopicStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  DONE = 'done',
  ARCHIVED = 'archived',
}

export type TopicDocument = HydratedDocument<Topic>;

@Schema({ ...baseSchemaOptions, collection: "topics" })
export class Topic extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: false })
  content: string;

  @Prop({ enum: Object.values(TopicStatus), required: true })
  status: string;

  @Prop({ default: [] })
  tags: string[];

  @Prop({ unique: true, slug: 'title' })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: 'Topic', default: null })
  parent: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Topic', default: null }] })
  path: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Task' }] })
  tasks: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  comments: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Attachment' }] })
  attachments?: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  author: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
TopicSchema.plugin(slugGenerator);

TopicSchema.pre('save', async function (next) {
  const topic: any = this;
  if (topic.parent) {
    const parentTopic = await mongoose.model('Topic').findById(topic.parent);
    if (parentTopic) topic.path = [...parentTopic.path, parentTopic._id];

  } else {
    topic.path = [];
  }

  next();
});

TopicSchema.virtual('numberOfChildren', {
  ref: 'Topic',
  localField: '_id',
  foreignField: 'parent',
  count: true,
});