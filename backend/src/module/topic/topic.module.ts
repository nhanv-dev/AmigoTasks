import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Topic, TopicSchema } from './entities/topic.entity';
import { TopicController } from './controllers/topic.controller';
import { TopicService } from './services/topic.service';
import { TopicRepository } from './repositories/topic.repository';
import { Comment, CommentSchema } from '../comment/entities/comment.entity';
import { CommentService } from '../comment/services/comment.service';
import { CommentRepository } from '../comment/repositories/comment.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Topic.name, schema: TopicSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  controllers: [TopicController],
  providers: [TopicService, TopicRepository, CommentService, CommentRepository],
  exports: [TopicService, TopicRepository],
})
export class TopicModule {}
