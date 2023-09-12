import { Base } from "@services/_common/type";
import { Comment } from "@services/comment/types";

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

export type TaskList = Base & {
    title: string;
    workspace: string;
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

export type DeleteTask = {
    id: string
}

export type CreateTaskList = {
    title: string;
    statuses: string[];
    workspace: string
}

export type UpdateTaskList = Partial<TaskList>

export type DeleteTaskList = {
    id: string;
}

