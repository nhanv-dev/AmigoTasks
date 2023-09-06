import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TopicStatus } from '../entities/topic.entity';

export class CreateTopicDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  status: TopicStatus = TopicStatus.NEW;

  @IsString()
  @IsOptional()
  parent: string = null;

  @IsString()
  @IsOptional()
  workspace: string = null;

  @IsString()
  @IsOptional()
  background: string = null;

  @IsString()
  @IsOptional()
  author: string;
}
