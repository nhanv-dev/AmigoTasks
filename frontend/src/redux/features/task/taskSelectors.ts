import { createSelector } from "@reduxjs/toolkit";
import { TaskState } from "./types";

interface PartialTaskState {
    task: TaskState;
}

const TaskStateSelector = (state: PartialTaskState) => state.task;

export const TaskSelectors = {
    getFormTask: () => createSelector(TaskStateSelector, ({ formTask }) => formTask),

    getTasks: () => createSelector(TaskStateSelector, ({ tasks, loading }) => ({ tasks, loading })),

    // getTask: () => createSelector(TaskStateSelector, ({ tasks, loading }) => ({ tasks, loading })),

    getFormTaskList: () => createSelector(TaskStateSelector, ({ formTaskList }) => formTaskList),

    getTaskLists: () => createSelector(TaskStateSelector, ({ taskLists, taskListsLoading }) => ({ taskLists, taskListsLoading })),
}