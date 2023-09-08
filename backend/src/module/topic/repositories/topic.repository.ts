import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/module/common/repositories/base.abstract.repository';
import { Topic } from '../entities/topic.entity';
import { TopicRepositoryInterface } from '../interfaces/topic.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TopicRepository
  extends BaseRepositoryAbstract<Topic>
  implements TopicRepositoryInterface {
  constructor(
    @InjectModel(Topic.name)
    private readonly topicModel: Model<Topic>,
  ) {
    super(topicModel);
  }

  async findDetailTopic(id: string, authorId: string) {
    return this.topicModel
      .findOne({ _id: id, author: authorId, deletedAt: null })
      .populate('workspace')
      .populate('numberOfChildren')
      .populate('parent')
      .populate({
        path: 'comments',
        populate: {
          path: 'author',
          select: 'id name username avatar'
        }
      })
      .populate({
        path: 'author',
        select: 'id name username avatar'
      })
      .populate('path');
  }

  async findAllWithoutContent(queryParams: any) {
    return this.topicModel
      .find({ deletedAt: null, ...queryParams })
      .select('-content -comments')
      .populate('workspace')
      .populate('numberOfChildren')
      .populate({ path: 'parent', select: 'id title' })
      .sort({ createdAt: -1 });
  }

  async findByParent(parent: string, authorId: string) {
    return this.topicModel
      .find({ deletedAt: null, parent, author: authorId })
      .select('-content -comments -externalLinks')
      .populate('numberOfChildren')
      .sort({ createdAt: 1 });
  }
}
