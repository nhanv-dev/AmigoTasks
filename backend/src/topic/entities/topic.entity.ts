import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/common/entities/base.entity';
import { ExternalLink } from './external-link.entity';

export enum TopicStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export type TopicDocument = HydratedDocument<Topic>;

@Schema({ ...baseSchemaOptions, collection: 'topics' })
export class Topic extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  content: string;

  @Prop({
    required: false,
    enum: Object.values(TopicStatus),
    default: TopicStatus.PENDING,
  })
  status: string;

  @Prop({ required: false, default: [] })
  tags: string[];

  @Prop({ type: Types.ObjectId, ref: 'Topic', default: null })
  parent: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Topic', default: null }] })
  path: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Task' }] })
  tasks: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  comments: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  author: string;

  @Prop({ default: [] })
  externalLinks: ExternalLink[];

  @Prop({
    type: Types.ObjectId,
    ref: 'Workspace',
    require: false,
    default: null,
  })
  workspace: Types.ObjectId;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);

TopicSchema.pre('save', async function (next) {
  // const topic: any = this;
  if (this.parent) {
    const parentTopic = await mongoose.model('Topic').findById(this.parent);
    if (parentTopic) this.path = [...parentTopic.path, parentTopic._id];
  } else {
    this.path = [];
  }

  next();
});

TopicSchema.virtual('numberOfChildren', {
  ref: 'Topic',
  localField: '_id',
  foreignField: 'parent',
  count: true,
});
