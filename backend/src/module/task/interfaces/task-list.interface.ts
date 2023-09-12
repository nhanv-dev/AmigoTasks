import { BaseRepositoryInterface } from 'src/module/common/interfaces/base.interface.repository';
import { TaskList } from '../entities/task-list.entity';

export interface TaskListRepositoryInterface extends BaseRepositoryInterface<TaskList> { }
