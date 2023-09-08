import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentController } from './controllers/comment.controller';
import { Comment, CommentSchema } from './entities/comment.entity';
import { CommentService } from './services/comment.service';
import { CommentRepository } from './repositories/comment.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [CommentController],
  exports: [CommentService, CommentRepository],
  providers: [CommentService, CommentRepository],
})
export class CommentModule {}
