import { Module } from '@nestjs/common';
import { CommentService } from './services/comment.service';
import { CommentController } from './controllers/comment.controller';

@Module({
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
