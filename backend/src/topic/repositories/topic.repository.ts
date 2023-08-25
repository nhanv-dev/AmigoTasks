import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/common/repositories/base.abstract.repository';
import { Topic } from '../entities/topic.entity';
import { TopicRepositoryInterface } from '../interfaces/topic.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TopicRepository extends BaseRepositoryAbstract<Topic> implements TopicRepositoryInterface {
  constructor(
    @InjectModel(Topic.name)
    private readonly topicModel: Model<Topic>,
  ) {
    super(topicModel);
  }

  async findDetailTopic(id: string) {
    return this.topicModel
      .findOne({ _id: id, deletedAt: null })
      .populate('workspace')
      .populate('numberOfChildren')
      .populate('parent')
      .populate('path')
  }

  async findAllWithoutContent(queryParams: any) {
    return this.topicModel
      .find({ deletedAt: null, ...queryParams })
      .select('-content -comments -externalLinks')
      .populate('workspace')
      .populate('numberOfChildren')
      .populate('parent')
      .sort({ createdAt: -1 })
  }

  async findByParent(parent: string) {
    return this.topicModel
      .find({ deletedAt: null, parent })
      .select('-content -comments -externalLinks')
      .populate('numberOfChildren')
      .sort({ createdAt: 1 })
  }
}
