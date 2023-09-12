import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  BaseEntity,
  baseSchemaOptions,
} from 'src/module/common/entities/base.entity';


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

  @Prop({ enum: Object.values(WorkspaceStatus), required: false, default: WorkspaceStatus.ACTIVE })
  status: string;

  @Prop({ require: false, default: [] })
  tags: string[];

  @Prop({ type: [{ type: String, ref: 'TaskList' }], default: [] })
  taskLists: string[];

  @Prop({ type: [{ type: String, ref: 'Topic' }], default: [] })
  topics: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', require: false })
  owner: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: false })
  background: string;
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);

WorkspaceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
  },
});

