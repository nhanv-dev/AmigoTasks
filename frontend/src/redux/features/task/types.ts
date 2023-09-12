import { Task, TaskList } from "@services/task/types";

export type Form = {
    selectedTask: Task | null;
    loading: boolean;
    isOpen: boolean;
}

export type TaskState = {
    tasks: Task[];
    taskLists: TaskList[]
    taskListsLoading: boolean;
    loading: boolean;
    form: Form
}