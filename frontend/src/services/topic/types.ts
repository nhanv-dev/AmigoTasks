import { Workspace } from "@services/workspace/types";
import { Base } from "../_common/type";

export type Topic = Base & {
    title: string;
    status: TopicStatus;
    description: string | null;
    workspace: Workspace | null;
    parent: Topic | null;
    path: string[];
    isFeatured: boolean;
    tags: string[];
    numberOfChildren: number;
    background?: string;
}

export type TopicFolder = Base & {
    title: string;
    status: TopicStatus;
    description: string | null;
    workspace: Workspace | null;
    parent: string | null;
    isFeatured: boolean;
    path: string[];
    tags: string[];
    numberOfChildren: number;
}

export type DetailTopic = Base & {
    content: string;
    isFeatured: boolean;
    title: string;
    status: TopicStatus;
    description: string | null;
    workspace: Workspace | null;
    parent: Topic | null;
    path: Topic[];
    tags: string[];
    numberOfChildren: number;
    background?: string;
}

export type CreateTopic = {
    title: string;
    parent: string | null;
    content?: string;
    background?: string;
}

export type UpdateTopic = {
    id: string;
    title?: string;
    status?: TopicStatus;
    description?: string | null;
    workspace?: Workspace | null;
    parent?: string | null;
    path?: string[];
    tags?: string[];
    content?: string;
    background?: string;
    isFeatured?: boolean;

};

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