import { BaseRepositoryInterface } from 'src/module/common/interfaces/base.interface.repository';
import { TaskStatus } from '../entities/task-status.entity';

export interface TaskStatusRepositoryInterface extends BaseRepositoryInterface<TaskStatus> { }
