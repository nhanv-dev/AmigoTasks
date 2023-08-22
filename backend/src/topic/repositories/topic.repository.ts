import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/common/repositories/base.abstract.repository';
import { Topic } from '../entities/topic.entity';
import { TopicRepositoryInterface } from '../interfaces/topic.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TopicRepository
  extends BaseRepositoryAbstract<Topic>
  implements TopicRepositoryInterface
{
  constructor(
    @InjectModel(Topic.name)
    private readonly topicModel: Model<Topic>,
  ) {
    super(topicModel);
  }
}
