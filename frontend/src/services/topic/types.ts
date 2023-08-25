import { Base } from "../_common/type";

export type Topic = Base & {
    title: string;
    status: TopicStatus;
    description: string;
    parent: any;
    path: string[],
    tags: string[];
    slug: string;
    workspace: string;
    numberOfChildren: number;
}

export type DetailTopic = Base & {
    title: string;
    status: TopicStatus;
    description: string;
    parent: any;
    path: Topic[],
    tags: string[];
    slug: string;
    workspace: string;
    numberOfChildren: number;
    content: string;
}

export type CreateTopic = {
    title: string;
}

export type UpdateTopic = Partial<Topic>;

export type DeleteTopic = {
    id: string;
}

export const enum TopicStatus {
    DRAFT = 'draft',
    NEW = 'new',
    IN_PROGRESS = 'in progress',
    COMPLETED = 'completed',
    ARCHIVED = 'archived',
}