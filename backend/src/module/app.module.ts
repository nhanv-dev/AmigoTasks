import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { DatabaseModule } from '../database/database.module';
import { TokenMiddleware } from '../middlewares/TokenMiddleware';
import { TaskModule } from './task/task.module';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    TopicModule,
    WorkspaceModule,
    TaskModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
