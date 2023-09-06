import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Comment } from 'src/module/comment/entities/comment.entity';
import { BaseEntity, baseSchemaOptions } from 'src/module/common/entities/base.entity';
import { Workspace } from 'src/module/workspace/entities/workspace.entity';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  COMPLETED = 'completed',
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export type TaskDocument = HydratedDocument<Task>;

@Schema({ ...baseSchemaOptions, collection: 'tasks' })
export class Task extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({
    enum: Object.values(TaskStatus),
    required: false,
    default: TaskStatus.PENDING,
  })
  status: string;

  @Prop({
    enum: Object.values(TaskPriority),
    required: false,
    default: TaskPriority.LOW,
  })
  priority: TaskPriority;

  @Prop({ default: [] })
  tags: string[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
    default: null,
  })
  workspace: Workspace;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

TaskSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
  },
});
