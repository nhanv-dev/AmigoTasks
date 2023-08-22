import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/common/entities/base.entity';

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

  @Prop({ require: false, default: 0 })
  pendingTaskCount: number;

  @Prop({ require: false, default: 0 })
  inProgressTaskCount: number;

  @Prop({ require: false, default: 0 })
  completedTaskCount: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], require: false })
  author: string;
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
