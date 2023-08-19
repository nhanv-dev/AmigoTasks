import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
  uri: 'mongodb://localhost:27017/todo-app',  
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   to
};