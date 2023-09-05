import { SignUpDto } from './../dtos/sign-up.dto';
import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/common/base.abstract.service';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class AuthService extends BaseServiceAbstract<User> {
    constructor(private readonly userRepository: UserRepository) {
        super(userRepository);
    }
 

}
