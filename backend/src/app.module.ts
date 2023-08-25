import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TopicModule } from './topic/topic.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { CommentModule } from './comment/comment.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    DatabaseModule,
    TopicModule,
    WorkspaceModule,
    TaskModule,
    CommentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
