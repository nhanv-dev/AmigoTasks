import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from 'src/module/common/repositories/base.abstract.repository';
import { TaskList } from '../entities/task-list.entity';
import { TaskListRepositoryInterface } from '../interfaces/task-list.interface';

@Injectable()
export class TaskListRepository extends BaseRepositoryAbstract<TaskList> implements TaskListRepositoryInterface {
  constructor(
    @InjectModel(TaskList.name)
    private readonly taskListModel: Model<TaskList>,
  ) {
    super(taskListModel);
  }

  async findById(id: string) {
    return this.taskListModel
      .findById(id)
      .populate('task-status')
  }
}
