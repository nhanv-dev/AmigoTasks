import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/common/base.abstract.service';
import { Topic } from '../entities/topic.entity';
import { TopicRepository } from '../repositories/topic.repository';


@Injectable()
export class TopicService extends BaseServiceAbstract<Topic> {
    constructor(
        private readonly topicRepository: TopicRepository,
    ) {
        super(topicRepository);
    }
}