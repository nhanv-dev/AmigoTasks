import { BaseRepositoryInterface } from 'src/module/common/interfaces/base.interface.repository';
import { User } from '../entities/user.entity';

export interface UserRepositoryInterface
  extends BaseRepositoryInterface<User> {}
