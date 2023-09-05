import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity, baseSchemaOptions } from 'src/common/entities/base.entity';

export enum AccountProvider {
  EXTERNAL = 'external',
  BASIC = 'basic',
}

export type UserDocument = HydratedDocument<User>;

@Schema({ ...baseSchemaOptions, collection: 'users' })
export class User extends BaseEntity {
  @Prop({ require: true })
  username: string;

  @Prop({ require: true })
  name: string;

  @Prop({ require: false, default: null })
  password: string;

  @Prop({ require: false, default: null })
  avatar: string;

  @Prop({ require: false, default: null })
  background: string;

  @Prop({ require: false, default: AccountProvider.BASIC })
  provider: AccountProvider;
}

export const UserSchema = SchemaFactory.createForClass(User);
