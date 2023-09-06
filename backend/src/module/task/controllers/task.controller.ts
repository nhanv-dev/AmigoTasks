import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TaskService } from '../services/task.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.taskService.remove(id);
  }

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Get('/workspaces/:id')
  async findByWorkspaceId(@Param('id') id: string) {
    return this.taskService.findAll({ workspace: id });
  }
}
