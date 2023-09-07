import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryAbstract } from 'src/module/common/repositories/base.abstract.repository';
import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from '../interfaces/user.interface';

@Injectable()
export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {
    super(userModel);
  }
}
