import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListController } from './controllers/task-list.controller';
import { TaskController } from './controllers/task.controller';
import { TaskList, TaskListSchema } from './entities/task-list.entity';
import { TaskStatus, TaskStatusSchema } from './entities/task-status.entity';
import { Task, TaskSchema } from './entities/task.entity';
import { TaskListRepository } from './repositories/task-list.repository';
import { TaskRepository } from './repositories/task.repository';
import { TaskListService } from './services/task-list.service';
import { TaskService } from './services/task.service';
import { TaskStatusService } from './services/task-status.service';
import { TaskStatusRepository } from './repositories/task-status.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Task.name, schema: TaskSchema },
      { name: TaskList.name, schema: TaskListSchema },
      { name: TaskStatus.name, schema: TaskStatusSchema },
    ]),
  ],
  controllers: [TaskListController, TaskController],
  providers: [
    TaskService,
    TaskRepository,
    TaskListService,
    TaskListRepository,
    TaskStatusService,
    TaskStatusRepository,
  ],
})
export class TaskModule { }
