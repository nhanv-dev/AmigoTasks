import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/common/base.abstract.service';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService extends BaseServiceAbstract<User> {
    constructor(private readonly userRepository: UserRepository) {
        super(userRepository);
    }

    async findByUsername(username: string) {
        return this.userRepository.findOneByCondition({ username })
    }
}
