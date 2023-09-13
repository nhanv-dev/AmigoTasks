import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskThunks } from "./taskThunks";
import { FormTask, FormTaskList, TaskState } from "./types";

const initialState: TaskState = {
    tasks: [],
    loading: false,
    taskLists: [],
    taskListsLoading: false,
    formTask: {
        selectedTask: null,
        loading: false,
        isOpen: false,
    },
    formTaskList: {
        selectedTaskList: null,
        loading: false,
        isOpen: false,
    },
}

export const task = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        setFormTask(state, action: PayloadAction<Partial<FormTask>>) {
            state.formTask = { ...state.formTask, ...action.payload }
        },
        setFormTaskList(state, action: PayloadAction<Partial<FormTaskList>>) {
            state.formTaskList = { ...state.formTaskList, ...action.payload }
        },
    },
    extraReducers: (builder) => {

        // ─── Task List ──────────────────────────────────────────────────────

        builder
            .addCase(TaskThunks.createTaskList.fulfilled, (state, action) => {
                state.taskLists.push(action.payload)
            });

        builder
            .addCase(TaskThunks.updateTaskList.fulfilled, (state, action) => {
                const index = state.taskLists.findIndex(list => list.id === action.payload.id);
                state.taskLists[index] = action.payload;
            })

        builder
            .addCase(TaskThunks.deleteTaskList.fulfilled, (state, action) => {
                state.taskLists = state.taskLists.filter(list => list.id !== action.meta.arg)
            });

        builder
            .addCase(TaskThunks.getTaskListById.pending, (state, action) => {
                state.taskListsLoading = true;
            })
            .addCase(TaskThunks.getTaskListById.fulfilled, (state, action) => {
                state.taskListsLoading = false;
                state.formTaskList = {
                    ...state.formTaskList,
                    selectedTaskList: action.payload,
                }
            })

        builder
            .addCase(TaskThunks.getTaskListsByWorkspaceId.pending, (state, action) => {
                state.taskListsLoading = true;
            })
            .addCase(TaskThunks.getTaskListsByWorkspaceId.fulfilled, (state, action) => {
                state.taskListsLoading = false;
                state.taskLists = action.payload;
            })

        // ─── Task ──────────────────────────────────────────────────────

        builder
            .addCase(TaskThunks.createTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            });

        builder
            .addCase(TaskThunks.updateTask.pending, (state, action) => {
                state.formTask = {
                    ...state.formTask,
                    loading: true,
                };
            })
            .addCase(TaskThunks.updateTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(task => task.id === action.payload.id);
                state.tasks[index] = action.payload;
                state.formTask = { ...state.formTask, loading: false };
            })
            .addCase(TaskThunks.updateTask.rejected, (state, action) => {
                state.formTask = {
                    ...state.formTask,
                    loading: false,
                };
            });

        builder
            .addCase(TaskThunks.deleteTask.pending, (state, action) => {

            })
            .addCase(TaskThunks.deleteTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg)
            })
            .addCase(TaskThunks.deleteTask.rejected, (state, action) => {

            });

        builder
            .addCase(TaskThunks.getAllTasks.pending, (state, action) => {

            })
            .addCase(TaskThunks.getAllTasks.fulfilled, (state, action) => {
                console.log(state, action)
            })
            .addCase(TaskThunks.getAllTasks.rejected, (state, action) => {
                console.log(state, action)
            });

        builder
            .addCase(TaskThunks.getTaskById.pending, (state, action) => {

            })
            .addCase(TaskThunks.getTaskById.fulfilled, (state, action) => {
                console.log(state, action)
            })
            .addCase(TaskThunks.getTaskById.rejected, (state, action) => {
                console.log(state, action)
            });

        builder
            .addCase(TaskThunks.getTasksByTaskListId.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(TaskThunks.getTasksByTaskListId.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(TaskThunks.getTasksByTaskListId.rejected, (state, action) => {
                state.tasks = [];
                state.loading = false;
            });

    }
})

export const TaskActions = task.actions;
