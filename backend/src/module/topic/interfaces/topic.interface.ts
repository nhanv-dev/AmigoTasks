import { BaseRepositoryInterface } from 'src/module/common/interfaces/base.interface.repository';
import { Topic } from '../entities/topic.entity';

export interface TopicRepositoryInterface
  extends BaseRepositoryInterface<Topic> {}
