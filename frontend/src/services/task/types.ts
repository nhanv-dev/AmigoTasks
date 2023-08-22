import { Comment } from "@services/comment/types";
import { Base } from "@services/_common/type";

export type Task = Base & {
    title: string;
    description: string;
    comments: Comment[];
    status: string;
    tags: string[];
}

export type CreateTask = {}

export type UpdateTask = {}

export type DeleteTask = {}
