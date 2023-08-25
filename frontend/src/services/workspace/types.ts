import { Base } from "@services/_common/type";
import { Task } from "@services/task/types";
import { Topic } from "@services/topic/types";

export enum WorkspaceStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    UNDER_RENOVATION = 'under renovation',
    ARCHIVED = 'archived',
}

export type Workspace = Base & {
    title: string;
    description: string;
    tasks: Task[];
    topics: Topic[];
    tags: string[];
    status: WorkspaceStatus;
    isPriority: boolean;
    pendingTaskCount: number;
    inProgressTaskCount: number;
    completedTaskCount: number;
}


export type CreateWorkspace = {
    title: string;
    description: string;
    tags: string[];
    isPriority: boolean;
}

export type UpdateWorkspace = Partial<Workspace>