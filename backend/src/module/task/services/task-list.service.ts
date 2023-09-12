import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/module/common/base.abstract.service';
import { TaskList } from '../entities/task-list.entity';
import { TaskListRepository } from '../repositories/task-list.repository';

@Injectable()
export class TaskListService extends BaseServiceAbstract<TaskList> {
  constructor(private readonly taskListRepository: TaskListRepository) {
    super(taskListRepository);
  }
  async findById(id: string) {
    return this.taskListRepository.findById(id);
  }
}
