import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from 'src/common/repositories/base.abstract.repository';
import { Task } from '../entities/task.entity';
import { TaskRepositoryInterface } from '../interfaces/task.interface';

@Injectable()
export class TaskRepository
  extends BaseRepositoryAbstract<Task>
  implements TaskRepositoryInterface
{
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {
    super(taskModel);
  }
}
