import { Module } from '@nestjs/common';
import { WorkspaceController } from './controllers/workspace.controller';
import { WorkspaceService } from './services/workspace.service';
import { WorkspaceRepository } from './repositories/workspace.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Workspace, WorkspaceSchema } from './entities/workspace.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Workspace.name, schema: WorkspaceSchema },
    ]),
  ],
  controllers: [WorkspaceController],
  exports: [WorkspaceService, WorkspaceRepository],
  providers: [WorkspaceService, WorkspaceRepository],
})
export class WorkspaceModule {}
