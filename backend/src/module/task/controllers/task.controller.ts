import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { TaskService } from '../services/task.service';
import { AccessiableBody } from 'src/decorators/accessiable-body.decorator';
import { TaskListService } from '../services/task-list.service';

@UseGuards(AuthGuard('jwt'))
@Controller('/tasks')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly taskListService: TaskListService,
  ) { }

  @Post()
  async create(@AccessiableBody('owner') createTaskDto: CreateTaskDto) {
    const task = await this.taskService.create(createTaskDto);
    await this.taskListService.update(createTaskDto.taskList,{})
    return task;
  }

  @Put(':id')
  async update(@Param('id') id: string, @AccessiableBody('owner') updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async delete(@Request() req: any, @Param('id') id: string) {
    return this.taskService.remove(id);
  }

  @Get()
  async findAll(@Request() req: any, @Param('taskListId') id: string) {
    console.log(id)

  }

  @Get(':id')
  async findById(@Request() req: any, @Param('id') id: string) {

  }
}
