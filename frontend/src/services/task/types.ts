import { Base } from "@services/common/type";


export type WorkSpace = Base & {
    name: string;
    description: string;
    tasks: Task[];
    tags: string[];
    pendingTask: number;
    inProgressTask: number;
    completedTask: number;
    isPriority: boolean;
}

export type Task = Base & {
    title: string;
    description: string;
    comments: TaskComment[];
    status: string;
    tags: string[];
}

export type TaskComment = Base & {
    content: string;
}


export type CreateTask = {}

export type UpdateTask = {}

export type DeleteTask = {}

export type CreateTaskComment = {}

export type UpdateTaskComment = {}

export type DeleteTaskComment = {}