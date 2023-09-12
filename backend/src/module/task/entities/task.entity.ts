import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Comment } from 'src/module/comment/entities/comment.entity';
import { BaseEntity, baseSchemaOptions } from 'src/module/common/entities/base.entity';
import { TaskList } from './task-list.entity';

export enum DefaultTaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  COMPLETED = 'completed',
  NEED_REVIEW = 'need review',
}

export enum TaskPriority {
  URGENT = 'urgent',
  HIGH = 'hight',
  MEDIUM = 'medium',
  LOW = 'low',
  NONE = 'none',
}

export type TaskDocument = HydratedDocument<Task>;

@Schema({ ...baseSchemaOptions, collection: 'tasks' })
export class Task extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TaskStatus', required: true })
  status: mongoose.Schema.Types.ObjectId;

  @Prop({ enum: Object.values(TaskPriority), default: TaskPriority.LOW, required: false })
  priority: TaskPriority;

  @Prop({ required: false, default: [] })
  tags: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: false, default: [] }] })
  comments: Comment[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TaskList', required: true })
  taskList: TaskList;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  owner: mongoose.Schema.Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

TaskSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
  },
});
