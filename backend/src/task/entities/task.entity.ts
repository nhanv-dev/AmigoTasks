import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import * as slugGenerator from 'mongoose-slug-generator';
import { BaseEntity, baseSchemaOptions } from 'src/common/entities/base.entity';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export enum TaskPriority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

export type TaskDocument = HydratedDocument<Task>;

@Schema({ ...baseSchemaOptions, collection: 'tasks' })
export class Task extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ enum: Object.values(TaskStatus), required: false, default: TaskStatus.PENDING })
  status: string;

  @Prop({ enum: Object.values(TaskPriority), default: TaskPriority.LOW })
  priority: TaskPriority;

  @Prop({ default: [] })
  tags: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  comments: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Workspace' }], default: null })
  workspace: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

TaskSchema.plugin(slugGenerator);
