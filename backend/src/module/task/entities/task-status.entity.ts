import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/module/common/entities/base.entity';

export type TaskDocument = HydratedDocument<TaskStatus>;

@Schema({ ...baseSchemaOptions, collection: 'task-statuses' })
export class TaskStatus extends BaseEntity {

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: Number, required: false, default: 0 })
  numberOfTasks: number;

  @Prop({ type: String, required: false })
  color: string;

  @Prop({ type: String, required: false })
  icon: string;
}

export const TaskStatusSchema = SchemaFactory.createForClass(TaskStatus);

TaskStatusSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
  },
});
