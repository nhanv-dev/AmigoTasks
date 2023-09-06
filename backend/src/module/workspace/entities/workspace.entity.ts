import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/module/common/entities/base.entity';

enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  COMPLETED = 'completed',
}

export enum WorkspaceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  UNDER_RENOVATION = 'under renovation',
  ARCHIVED = 'archived',
}

export type WorkspaceDocument = HydratedDocument<Workspace>;

@Schema({ ...baseSchemaOptions, collection: 'workspaces' })
export class Workspace extends BaseEntity {
  @Prop({ require: true })
  title: string;

  @Prop({ require: false })
  description: string;

  @Prop({ require: false, default: false })
  isPriority: boolean;

  @Prop({
    required: false,
    enum: Object.values(WorkspaceStatus),
    default: WorkspaceStatus.ACTIVE,
  })
  status: string;

  @Prop({ require: false, default: [] })
  tags: string[];

  @Prop({ type: [{ type: String, ref: 'Task' }], default: [] })
  tasks: string[];

  @Prop({ type: [{ type: String, ref: 'Topic' }], default: [] })
  topics: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], require: false })
  author: string;
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);

WorkspaceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
  },
});

WorkspaceSchema.virtual('pendingTaskCount', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'workspace',
  count: true,
  match: { status: TaskStatus.PENDING, deletedAt: null },
  defautl: 0,
});

WorkspaceSchema.virtual('inProgressTaskCount', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'workspace',
  count: true,
  match: { status: TaskStatus.IN_PROGRESS, deletedAt: null },
  default: 0,
});

WorkspaceSchema.virtual('completedTaskCount', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'workspace',
  count: true,
  match: { status: TaskStatus.COMPLETED, deletedAt: null },
  default: 0,
});
