import { Prop, Schema } from '@nestjs/mongoose';
import { baseSchemaOptions } from 'src/module/common/entities/base.entity';

@Schema({ ...baseSchemaOptions, collection: 'external-links' })
export class ExternalLink {
  @Prop({ required: false })
  name: string;

  @Prop({ required: true })
  url: string;
}
