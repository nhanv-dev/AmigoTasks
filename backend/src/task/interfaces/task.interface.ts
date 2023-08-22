import { BaseRepositoryInterface } from 'src/common/interfaces/base.interface.repository';
import { Task } from '../entities/task.entity';

export interface TaskRepositoryInterface
  extends BaseRepositoryInterface<Task> {}
