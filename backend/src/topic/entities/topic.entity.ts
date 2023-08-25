import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model, Types } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/common/entities/base.entity';
import { ExternalLink } from './external-link.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import { Task } from 'src/task/entities/task.entity';
import { Comment } from 'src/comment/entities/comment.entity';

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

  @Prop()
  content: string;

  @Prop({ enum: Object.values(TopicStatus), default: TopicStatus.NEW })
  status: TopicStatus;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic', default: null })
  parent: mongoose.Schema.Types.ObjectId;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic', default: null }] })
  path: mongoose.Schema.Types.ObjectId[];

  @Prop({ default: [] })
  tags: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }] })
  tasks: Task[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  author: string;

  @Prop({ default: [] })
  externalLinks: ExternalLink[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', default: null })
  workspace: Workspace;

}

export const TopicSchema = SchemaFactory.createForClass(Topic);

TopicSchema.set('toJSON', {
  virtuals: true,
});

TopicSchema.pre('save', async function (next) {
  if (this.parent) {
    const parentTopic = await (this.constructor as Model<Topic>).findById(this.parent);
    if (!parentTopic) throw new Error("Don't find parent topic");
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
