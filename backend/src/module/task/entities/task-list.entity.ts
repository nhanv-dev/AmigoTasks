import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  BaseEntity,
  baseSchemaOptions,
} from 'src/module/common/entities/base.entity';
import { Workspace } from 'src/module/workspace/entities/workspace.entity';

export type TaskListDocument = HydratedDocument<TaskList>;

@Schema({ ...baseSchemaOptions, collection: 'task-lists' })
export class TaskList extends BaseEntity {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  background: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TaskStatus' }] })
  statuses: mongoose.Schema.Types.ObjectId[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true })
  workspace: Workspace;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  owner: mongoose.Schema.Types.ObjectId;
}

export const TaskListSchema = SchemaFactory.createForClass(TaskList);

TaskListSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
  },
});


// TaskListSchema.virtual('pendingTaskCount', {
//   ref: 'Task',
//   localField: '_id',
//   foreignField: 'workspace',
//   count: true,
//   match: { status: TaskStatus.PENDING, deletedAt: null },
//   defautl: 0,
// });

// TaskListSchema.virtual('inProgressTaskCount', {
//   ref: 'Task',
//   localField: '_id',
//   foreignField: 'workspace',
//   count: true,
//   match: { status: TaskStatus.IN_PROGRESS, deletedAt: null },
//   default: 0,
// });

// TaskListSchema.virtual('completedTaskCount', {
//   ref: 'Task',
//   localField: '_id',
//   foreignField: 'workspace',
//   count: true,
//   match: { status: TaskStatus.COMPLETED, deletedAt: null },
//   default: 0,
// });