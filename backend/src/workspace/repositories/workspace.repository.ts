import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/common/repositories/base.abstract.repository';
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
}
