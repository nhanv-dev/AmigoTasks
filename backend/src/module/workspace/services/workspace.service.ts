import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/module/common/base.abstract.service';
import { Workspace } from '../entities/workspace.entity';
import { WorkspaceRepository } from '../repositories/workspace.repository';

@Injectable()
export class WorkspaceService extends BaseServiceAbstract<Workspace> {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {
    super(workspaceRepository);
  }

  async findAllWithTaskCounts(userId: string): Promise<Workspace[]> {
    return this.workspaceRepository.findAllWithTaskCounts(userId);
  }

  async findOneWithTaskCounts(id: string, userId: string): Promise<Workspace> {
    return this.workspaceRepository.findOneWithTaskCounts(id, userId);
  }
}
