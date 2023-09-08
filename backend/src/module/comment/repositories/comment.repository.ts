import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/module/common/repositories/base.abstract.repository';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentRepositoryInterface } from '../interfaces/comment.interface';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentRepository
  extends BaseRepositoryAbstract<Comment>
  implements CommentRepositoryInterface
{
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<Comment>,
  ) {
    super(commentModel);
  }

  async findDetail(id: string) {
    return this.commentModel.findOne({ _id: id, deletedAt: null }).populate({
      path: 'author',
      select: 'id name username avatar',
    });
  }
}
