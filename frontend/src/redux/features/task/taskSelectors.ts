import { createSelector } from "@reduxjs/toolkit";
import { TaskState } from "./types";

interface PartialTaskState {
    task: TaskState;
}

const TaskStateSelector = (state: PartialTaskState) => state.task;

export const TaskSelectors = {
    getForm: () => createSelector(TaskStateSelector, ({ form }) => form),

    getTasks: () => createSelector(TaskStateSelector, ({ tasks, loading }) => ({ tasks, loading })),

    getTask: () => createSelector(TaskStateSelector, ({ tasks, loading }) => ({ tasks, loading })),
}