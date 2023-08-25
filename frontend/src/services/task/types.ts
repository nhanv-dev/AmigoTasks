import { workspace } from './../../redux/features/workspace/workspaceSlice';
import { Comment } from "@services/comment/types";
import { Base } from "@services/_common/type";

export enum TaskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'in progress',
    COMPLETED = 'completed',
}

export enum TaskPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}

export type Task = Base & {
    title: string;
    description: string;
    comments: Comment[];
    status: TaskStatus;
    tags: string[];
    priority: TaskPriority;
    workspace: string;
}

export type CreateTask = {
    title: string;
    description: string;
    status: TaskStatus;
    workspace: string;
}

export type UpdateTask = Partial<Task>

export type DeleteTask = {}
