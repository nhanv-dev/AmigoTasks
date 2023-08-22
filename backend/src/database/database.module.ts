import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://admin:RGtC1OMXG5sEGGMU@cluster0.buqbn05.mongodb.net/todo-app'),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'todo-app',
    }),
  ],
})
export class DatabaseModule {}
