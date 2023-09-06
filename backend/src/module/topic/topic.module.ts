import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Topic, TopicSchema } from './entities/topic.entity';
import { TopicController } from './controllers/topic.controller';
import { TopicService } from './services/topic.service';
import { TopicRepository } from './repositories/topic.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }]),
  ],
  controllers: [TopicController],
  providers: [TopicService, TopicRepository],
  exports: [TopicService, TopicRepository],
})
export class TopicModule {}
