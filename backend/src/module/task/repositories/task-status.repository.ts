import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from 'src/module/common/repositories/base.abstract.repository';
import { TaskStatus } from '../entities/task-status.entity';
import { TaskStatusRepositoryInterface } from '../interfaces/task-status.interface';

@Injectable()
export class TaskStatusRepository extends BaseRepositoryAbstract<TaskStatus> implements TaskStatusRepositoryInterface {
  constructor(
    @InjectModel(TaskStatus.name)
    private readonly taskStatusModel: Model<TaskStatus>,
  ) {
    super(taskStatusModel);
  }
}
