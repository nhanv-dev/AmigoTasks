import { Base } from "@services/_common/type";
import { Task } from "@services/task/types";

export type Workspace = Base & {
    name: string;
    description: string;
    tasks: Task[];
    tags: string[];
    pendingTask: number;
    inProgressTask: number;
    completedTask: number;
    isPriority: boolean;
}


export type CreateWorkspace = {
    name: string;
    description: string;
    tags: string[];
    isPriority: boolean;
}

export type UpdateWorkspace = {
    id: string;
    name: string;
    description: string;
    tags: string[];
    isPriority: boolean;
}

/*
    minh hoc ve docker 
    minh tao workspace docker
    minh them task tim hieu ve docker 
    minh viet topic cho tim hieu ve docker
    vao task do tao topic tim hieu ve docker

    neu task bi xoa topic
    1 task co nhieu topic
*/ 