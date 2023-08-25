import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/common/base.abstract.service';
import { CreateTopicDto } from '../dtos/create-topic.dto';
import { Topic } from '../entities/topic.entity';
import { TopicRepository } from '../repositories/topic.repository';

@Injectable()
export class TopicService extends BaseServiceAbstract<Topic> {
  constructor(private readonly topicRepository: TopicRepository) {
    super(topicRepository);
  }

  async createTopic(createTopic: CreateTopicDto) {
    return this.topicRepository.create(createTopic)
  }
  
  async findDetailTopic(id:string) {
    return this.topicRepository.findDetailTopic(id)
  }

  async findAllWithoutContent(queryParams: any) {
    return this.topicRepository.findAllWithoutContent(queryParams)
  }

  async findByParent(parent: string) {
    return this.topicRepository.findByParent(parent)
  }
}
