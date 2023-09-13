import { Base } from "@services/_common/type";
import { Comment } from "@services/comment/types";

export enum TaskPriority {
    NONE = 'none',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGEN = 'urgen',
}

export type TaskList = Base & {
    title: string;
    workspace: string;
    statuses: string[];
}

export type Task = Base & {
    title: string;
    description: string;
    comments: Comment[];
    status: string;
    tags: string[];
    priority: TaskPriority;
    workspace: string;
}

export type CreateTask = {
    title: string;
    description: string;
    status: string;
    workspace: string;
    taskList: string;
}

export type UpdateTask = Partial<Task>

export type DeleteTask = {
    id: string;
    taskList: string;
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

