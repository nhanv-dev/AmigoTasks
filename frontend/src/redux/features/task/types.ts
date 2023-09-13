import { Task, TaskList } from "@services/task/types";

export type FormTask = {
    selectedTask: Task | null;
    loading: boolean;
    isOpen: boolean;
}

export type FormTaskList = {
    selectedTaskList: TaskList | null;
    loading: boolean;
    isOpen: boolean;
}

export type TaskState = {
    tasks: Task[];
    taskLists: TaskList[]
    taskListsLoading: boolean;
    loading: boolean;
    formTask: FormTask;
    formTaskList: FormTaskList;
}