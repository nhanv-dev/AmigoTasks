import { Base } from "../common/type";

export type Topic = Base & {
    title: string;
    status: TopicStatus;
    description: string;
    parent: any;
    tags: string[];
    slug: string;
}

export type DetailTopic = Topic & {
    content: string;
}

export type CreateTopic = {
    title: string;
    description?: string;
    tags?: string[];
}

export type UpdateTopic = {
    title: string;
    description?: string;
    tags?: string[];
}

export type DeleteTopic = {
    id: string;
}

export const enum TopicStatus {
    TODO = 'Todo',
    IN_PROGESS = 'In Progess',
    COMPLETED  = 'Completed',
}