import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/module/common/base.abstract.service';
import { TaskStatus } from '../entities/task-status.entity';
import { TaskStatusRepository } from '../repositories/task-status.repository';

@Injectable()
export class TaskStatusService extends BaseServiceAbstract<TaskStatus> {
  constructor(private readonly taskStatusRepository: TaskStatusRepository) {
    super(taskStatusRepository);
  }

}
