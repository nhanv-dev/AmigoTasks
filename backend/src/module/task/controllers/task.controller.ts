import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NoPermissionException } from 'src/exception/NoPermissionException.exception';
import { NotFoundDataException } from 'src/exception/NotFoundDataException.exception';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { TaskService } from '../services/task.service';

@UseGuards(AuthGuard('jwt'))
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  async create(@Request() req: any, @Body() createTaskDto: CreateTaskDto) {
    createTaskDto.owner = req.user.id;
    return this.taskService.create(createTaskDto);
  }

  @Put(':id')
  async update(@Request() req: any, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const task = await this.taskService.findOne(id);
    if (!task) throw new NotFoundDataException();
    if (task.owner.toString() !== req.user.id) throw new NoPermissionException();
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async delete(@Request() req: any, @Param('id') id: string) {
    const task = await this.taskService.findOne(id);
    if (!task) throw new NotFoundDataException();
    if (task.owner.toString() !== req.user.id) throw new NoPermissionException();
    return this.taskService.remove(id);
  }

  @Get()
  async findAll(@Request() req: any) {
    return this.taskService.findAll({ owner: req.user.id });
  }

  @Get(':id')
  async findById(@Request() req: any, @Param('id') id: string) {
    return this.taskService.findOneByOwner(id, req.user.id);
  }

  @Get('/workspaces/:id')
  async findByWorkspaceId(@Request() req: any, @Param('id') id: string) {
    return this.taskService.findAll({ workspace: id, owner: req.user.id });
  }
}
