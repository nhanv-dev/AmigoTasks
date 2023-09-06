import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/module/common/base.abstract.service';
import { CreateTopicDto } from '../dtos/create-topic.dto';
import { Topic } from '../entities/topic.entity';
import { TopicRepository } from '../repositories/topic.repository';
import { UpdateTopicDto } from '../dtos/update-topic.dto';

@Injectable()
export class TopicService extends BaseServiceAbstract<Topic> {
  constructor(private readonly topicRepository: TopicRepository) {
    super(topicRepository);
  }

  async createTopic(createTopicDto: CreateTopicDto) {
    const topic = await this.topicRepository.create(createTopicDto);
    return this.topicRepository.findDetailTopic(topic.id, createTopicDto.author);
  }

  async updateTopic(id: string, updateTopicDto: UpdateTopicDto) {
    const topic = await this.findOne(updateTopicDto.id);
    if (topic && topic.parent && topic.parent !== updateTopicDto.parent) {
    }
    const savedTopic = await this.update(id, updateTopicDto);
    return this.topicRepository.findDetailTopic(savedTopic.id, savedTopic.author.toString());
  }

  async deleteTopic(id: string) {
    const topic = await this.topicRepository.findOneById(id);
    if (!topic) throw new Error("Topic doesn't exist");
    if (topic.parent) {
    }
    return this.remove(id);
  }

  async findDetailTopic(id: string, authorId: string) {
    return this.topicRepository.findDetailTopic(id, authorId);
  }

  async findAllWithoutContent(queryParams: any) {
    return this.topicRepository.findAllWithoutContent(queryParams);
  }

  async findByParent(parent: string, authorId: string) {
    return this.topicRepository.findByParent(parent, authorId);
  }
}
