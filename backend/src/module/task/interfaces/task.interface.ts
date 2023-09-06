import { BaseRepositoryInterface } from 'src/module/common/interfaces/base.interface.repository';
import { Task } from '../entities/task.entity';

export interface TaskRepositoryInterface
  extends BaseRepositoryInterface<Task> {}
