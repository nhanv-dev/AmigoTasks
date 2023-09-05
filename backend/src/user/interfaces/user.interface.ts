import { BaseRepositoryInterface } from 'src/common/interfaces/base.interface.repository';
import { User } from '../entities/user.entity';

export interface UserRepositoryInterface extends BaseRepositoryInterface<User> { }
