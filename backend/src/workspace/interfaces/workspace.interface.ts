import { BaseRepositoryInterface } from 'src/common/interfaces/base.interface.repository';
import { Workspace } from '../entities/workspace.entity';

export interface WorkspaceRepositoryInterface
  extends BaseRepositoryInterface<Workspace> {}
