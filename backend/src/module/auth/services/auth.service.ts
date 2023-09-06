import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { BaseServiceAbstract } from 'src/module/common/base.abstract.service';
import { AccountProvider, User } from 'src/module/user/entities/user.entity';
import { UserRepository } from 'src/module/user/repositories/user.repository';
import { UserService } from 'src/module/user/services/user.service';

@Injectable()
export class AuthService extends BaseServiceAbstract<User> {
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {
    super(userRepository);
  }

  async validateUser(
    username: string,
    password: string,
    proviver: AccountProvider = AccountProvider.CREDENTIALS,
  ): Promise<any> {
    const user = await this.usersService.findByUsername(username, proviver);
    if (!user) throw new NotAcceptableException('could not find the user');

    if (user.provider === AccountProvider.CREDENTIALS && user.password) {
      if (!(await bcrypt.compare(password, user.password)))
        throw new BadRequestException('Invalid credentials');
    }

    return user;
  }
}
