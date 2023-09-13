import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { TokenMiddleware } from '../middlewares/TokenMiddleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { TaskModule } from './task/task.module';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    // MongooseModule.forRootAsync({
    //   useFactory: () => ({
    //     uri: process.env.DATABASE_URI,
    //     retryDelay: 5000, // Adjust as needed
    //     retryAttempts: 3, // Adjust as needed
    //   }),
    // }),
    MongooseModule.forRoot((() => {
      if (!process.env.DATABASE_URI) throw Error("DATABASE_URI environment variable is empty");
      console.log(process.env.DATABASE_URI)
      return process.env.DATABASE_URI;
    })()),
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
