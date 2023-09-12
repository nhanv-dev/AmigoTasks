import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';

export class CreateTaskListDto {
  @IsNotEmpty({ message: "Title is not empty" })
  @IsString({ message: "Title must be a string" })
  title: string;

  @IsArray()
  statuses: string[];

  @IsNumber()
  @IsOptional()
  order: number;

  @IsNotEmpty({ message: "Workspace is not empty" })
  workspace: string;

  @IsString()
  @IsOptional()
  owner: string;

  @IsString()
  @IsOptional()
  background: string;
}
