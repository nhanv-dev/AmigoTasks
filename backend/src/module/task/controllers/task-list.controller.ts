import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AccessiableBody } from 'src/decorators/accessiable-body.decorator';
import { NoPermissionException } from 'src/exception/NoPermissionException.exception';
import { NotFoundDataException } from 'src/exception/NotFoundDataException.exception';
import mongooseComparator from 'src/utils/MongooseComparator';
import { CreateTaskListDto } from '../dtos/create-task-list.dto';
import { UpdateTaskListDto } from '../dtos/update-task-list.dto';
import { DefaultTaskStatus } from '../entities/task.entity';
import { TaskListService } from '../services/task-list.service';
import { TaskStatusService } from '../services/task-status.service';

@UseGuards(AuthGuard('jwt'))
@Controller('task-lists')
export class TaskListController {
  constructor(
    private readonly taskListService: TaskListService,
    private readonly taskStatusService: TaskStatusService,
  ) { }

  @Post()
  async create(@AccessiableBody('owner') createTaskListDto: CreateTaskListDto) {
    if (!createTaskListDto.statuses || createTaskListDto.statuses.length === 0) {
      const [pending, inProgress, completed] = await Promise.all([
        this.taskStatusService.create({ title: DefaultTaskStatus.PENDING }),
        this.taskStatusService.create({ title: DefaultTaskStatus.IN_PROGRESS }),
        this.taskStatusService.create({ title: DefaultTaskStatus.COMPLETED }),
        this.taskStatusService.create({ title: DefaultTaskStatus.NEED_REVIEW }),
      ])
      createTaskListDto.statuses = [pending.id, inProgress.id, completed.id]
    } else {
      const data = await Promise.all(
        createTaskListDto.statuses.map(status => (
          this.taskStatusService.create({ title: status })
        ))
      )
      createTaskListDto.statuses = data.map(item => item._id.toString())
    }
    return this.taskListService.create(createTaskListDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @AccessiableBody('owner') updateTaskDto: UpdateTaskListDto) {
    const taskList = await this.taskListService.findOne(id);
    if (!taskList) throw new NotFoundDataException();
    if (updateTaskDto.owner.toString() !== taskList.owner.toString()) throw new NoPermissionException();
    return this.taskListService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async delete(@Request() req: any, @Param('id') id: string) {
    const taskList = await this.taskListService.findOne(id);
    if (!taskList) throw new NotFoundDataException(`Not found task list with id ${id}`);
    if (mongooseComparator.compareObjectById(taskList, req.user)) throw new NoPermissionException('You do not have permission to delete this task list');
    this.taskListService.remove(id);
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    return this.taskListService.findById(id);
  }

  @Get('/workspaces/:id')
  async findByWorkspaceId(@Param('id') id: string) {
    return this.taskListService.findAll({ workspace: id });
  }

}
