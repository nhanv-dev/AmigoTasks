import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';
import { TaskPriority } from '../entities/task.entity';

export class CreateTaskDto {

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  status: string;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority: TaskPriority = TaskPriority.LOW;

  @IsOptional()
  @IsNumber()
  order: number;

  @IsNotEmpty()
  @IsMongoId()
  workspace: string;

  @IsOptional()
  @IsString()
  owner: string;

}
