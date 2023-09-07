import {
  BadRequestException,
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
import { CreateWorkspace } from '../dtos/create-workspace.dto';
import { UpdateWorkspace } from '../dtos/update-workspace.dto';
import { Workspace } from '../entities/workspace.entity';
import { WorkspaceService } from '../services/workspace.service';

@UseGuards(AuthGuard('jwt'))
@Controller('workspaces')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  async create(
    @Request() req: any,
    @Body() createWorkspace: CreateWorkspace,
  ): Promise<Workspace> {
    createWorkspace.owner = req.user.id;
    return this.workspaceService.create(createWorkspace);
  }

  @Put(':id')
  async update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateWorkspace: UpdateWorkspace,
  ) {
    const workspace = await this.workspaceService.findOne(id);
    if (!workspace) throw new BadRequestException('Workspace is not exist');
    if (workspace.owner.toString() !== req.user.id)
      throw new BadRequestException('Do not have permission');
    return this.workspaceService.update(id, updateWorkspace);
  }

  @Delete(':id')
  async remove(@Request() req: any, @Param('id') id: string) {
    const workspace = await this.workspaceService.findOne(id);
    if (!workspace) throw new BadRequestException('Workspace is not exist');
    if (workspace.owner.toString() !== req.user.id)
      throw new BadRequestException('Do not have permission');
    this.workspaceService.remove(id);
  }

  @Get()
  async findAll(@Request() req: any) {
    return this.workspaceService.findAllWithTaskCounts(req.user.id);
  }

  @Get(':id')
  async findById(@Request() req: any, @Param('id') id: string) {
    return this.workspaceService.findOneWithTaskCounts(id, req.user.id);
  }
}
