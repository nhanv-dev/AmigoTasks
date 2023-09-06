import { BaseRepositoryInterface } from 'src/module/common/interfaces/base.interface.repository';
import { Workspace } from '../entities/workspace.entity';

export interface WorkspaceRepositoryInterface
  extends BaseRepositoryInterface<Workspace> {}
