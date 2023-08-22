import { Prop, Schema } from "@nestjs/mongoose";
import { BaseEntity, baseSchemaOptions } from "src/common/entities/base.entity";

export enum AttachmentType {
    FILE = 'file',
    LINK = 'link',
}

@Schema({ ...baseSchemaOptions, collection: "attachments" })
export class Attachment extends BaseEntity {
    @Prop({ required: true, enum: AttachmentType })
    type: AttachmentType;

    @Prop({ required: true })
    url: string;

    @Prop()
    filename?: string;

    @Prop()
    mimeType?: string;
}
