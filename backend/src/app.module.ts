import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TopicModule } from './topic/controllers/topic.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { TaskModule } from './task/task.module';
import { CommentModule } from './comment/comment.module';
 

@Module({
  imports: [
    DatabaseModule,
    TopicModule,
    WorkspaceModule,
    TaskModule,
    CommentModule, 
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
