import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/module/common/entities/base.entity';
import { Task } from 'src/module/task/entities/task.entity';
import { ExternalLink } from './external-link.entity';

export enum TopicStatus {
  DRAFT = 'draft',
  NEW = 'new',
  IN_PROGRESS = 'in progress',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
}

export type TopicDocument = HydratedDocument<Topic>;

@Schema({ ...baseSchemaOptions, collection: 'topics' })
export class Topic extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false, default: null })
  content: string;

  @Prop({ enum: Object.values(TopicStatus), default: TopicStatus.NEW })
  status: TopicStatus;

  @Prop({ type: Boolean, default: false })
  isFeatured: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic', default: null })
  parent: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic', default: [] }],
  })
  path: mongoose.Schema.Types.ObjectId[];

  @Prop({ default: [] })
  tags: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] })
  tasks: Task[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: mongoose.Schema.Types.ObjectId[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  author: mongoose.Schema.Types.ObjectId;

  @Prop({ required: false, default: [] })
  externalLinks: ExternalLink[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
    default: null,
  })
  workspace: mongoose.Schema.Types.ObjectId;

  @Prop({ required: false, default: null })
  background: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);

TopicSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
  },
});

TopicSchema.pre('save', async function (next) {
  if (this.parent) {
    const parentTopic = await (this.constructor as Model<Topic>).findById(
      this.parent,
    );
    if (!parentTopic) throw new Error("Parent topic doesn't exist");
    this.path = [...parentTopic.path, this.parent];
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
  match: { deletedAt: null },
  default: 0,
});
