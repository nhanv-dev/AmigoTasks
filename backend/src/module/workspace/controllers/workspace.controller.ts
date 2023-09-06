import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request, UseGuards,
} from '@nestjs/common';
import { CreateWorkspace } from '../dtos/create-workspace.dto';
import { UpdateWorkspace } from '../dtos/update-workspace.dto';
import { Workspace } from '../entities/workspace.entity';
import { WorkspaceService } from '../services/workspace.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('workspaces')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) { }

  @Post()
  create(@Body() createWorkspace: CreateWorkspace): Promise<Workspace> {
    return this.workspaceService.create(createWorkspace);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkspace: UpdateWorkspace,
  ): Promise<Workspace | undefined> {
    return this.workspaceService.update(id, updateWorkspace);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    this.workspaceService.remove(id);
    return;
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Request() req): Promise<Workspace[]> {
    console.log(req.user?.username)
    return this.workspaceService.findAllWithTaskCounts();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Workspace | undefined> {
    return this.workspaceService.findOneWithTaskCounts(id);
  }
}
