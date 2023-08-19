

export type Task = {
    title: string;
    description: string;
    comments: TaskComment[];
    status: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | undefined | null;
}

export type TaskComment = {
    content: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}


export type CreateTask = {}

export type UpdateTask = {}

export type DeleteTask = {}

export type CreateTaskComment = {}

export type UpdateTaskComment = {}

export type DeleteTaskComment = {}