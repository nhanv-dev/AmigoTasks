import { Task } from "@services/task/types";

export type Form = {
    selectedTask: Task | null;
    loading: boolean;
    isOpen: boolean;
}

export type TaskState = {
    tasks: Task[];
    loading: boolean;
    form: Form
}