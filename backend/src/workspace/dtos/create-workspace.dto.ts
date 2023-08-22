import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateWorkspace {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title should be a string' })
  title: string;

  @IsString({ message: 'Description should be a string' })
  @IsOptional()
  description: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags: string[];

  @IsOptional()
  @IsBoolean()
  isPriority: boolean;
}
