
import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsMongoId, IsEnum } from 'class-validator';
import { TaskPriority, TaskStatus } from '../entities/task.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;


  @IsOptional()
  @IsEnum(TaskStatus)
  status: string;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority: string;


  @IsNotEmpty()
  @IsMongoId()
  workspace: string;
}
