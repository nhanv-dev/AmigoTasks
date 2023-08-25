import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/common/repositories/base.abstract.repository';
import { Workspace } from '../entities/workspace.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkspaceRepositoryInterface } from '../interfaces/workspace.interface';

@Injectable()
export class WorkspaceRepository
  extends BaseRepositoryAbstract<Workspace>
  implements WorkspaceRepositoryInterface {
  constructor(
    @InjectModel(Workspace.name)
    private readonly workspaceModel: Model<Workspace>,
  ) {
    super(workspaceModel);
  }

  async findAllWithTaskCounts() {
    return this.workspaceModel
      .find({ deletedAt: null })
      .populate('pendingTaskCount')
      .populate('inProgressTaskCount')
      .populate('completedTaskCount')
      .exec()
  }

  async findOneWithTaskCounts(id: string) {
    return this.workspaceModel
      .findOne({ _id: id, deletedAt: null })
      .populate('pendingTaskCount')
      .populate('inProgressTaskCount')
      .populate('completedTaskCount')
      .exec()
  }
}
