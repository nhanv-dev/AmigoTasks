import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/module/common/repositories/base.abstract.repository';
import { Workspace } from '../entities/workspace.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkspaceRepositoryInterface } from '../interfaces/workspace.interface';

@Injectable()
export class WorkspaceRepository
  extends BaseRepositoryAbstract<Workspace>
  implements WorkspaceRepositoryInterface
{
  constructor(
    @InjectModel(Workspace.name)
    private readonly workspaceModel: Model<Workspace>,
  ) {
    super(workspaceModel);
  }

  async findAllWithTaskCounts(userId: string) {
    try {
      return this.workspaceModel
        .find({ owner: userId, deletedAt: null })
        .populate('pendingTaskCount')
        .populate('inProgressTaskCount')
        .populate('completedTaskCount')
        .exec();
    } catch (error) {
      return null;
    }
  }

  async findOneWithTaskCounts(id: string, userId: string) {
    return this.workspaceModel
      .findOne({ _id: id, owner: userId, deletedAt: null })
      .populate('pendingTaskCount')
      .populate('inProgressTaskCount')
      .populate('completedTaskCount')
      .exec();
  }
}
