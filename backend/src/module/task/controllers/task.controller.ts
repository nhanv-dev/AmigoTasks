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

@UseGuards(AuthGuard('jwt'))
@Controller('/list-tasks/:taskListId/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  async create(
    @Request() req: any,
    @Body() createTaskDto: CreateTaskDto
  ) {

  }

  @Put(':id')
  async update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {

  }

  @Delete(':id')
  async delete(
    @Request() req: any,
    @Param('id') id: string
  ) {

  }

  @Get()
  async findAll(@Request() req: any, @Param('taskListId') id: string) {
    console.log(id)

  }

  @Get(':id')
  async findById(@Request() req: any, @Param('id') id: string) {

  }

  @Get('/workspaces/:id')
  async findByWorkspaceId(@Request() req: any, @Param('id') id: string) {
  }
}
