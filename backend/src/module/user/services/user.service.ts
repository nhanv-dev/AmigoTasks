import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/module/common/base.abstract.service';
import { AccountProvider, User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService extends BaseServiceAbstract<User> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }

  async findByUsername(
    username: string,
    provider: AccountProvider = AccountProvider.CREDENTIALS,
  ) {
    return this.userRepository.findOneByCondition({ username, provider });
  }
}
