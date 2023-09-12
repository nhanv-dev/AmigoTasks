import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskThunks } from "./taskThunks";
import { Form, TaskState } from "./types";

const initialState: TaskState = {
    tasks: [],
    loading: false,
    taskLists: [],
    taskListsLoading: false,
    form: {
        selectedTask: null,
        loading: false,
        isOpen: false,
    }
}

export const task = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        setForm(state, action: PayloadAction<Partial<Form>>) {
            state.form = { ...state.form, ...action.payload }
        }
    },
    extraReducers: (builder) => {

        // ─── Task List ──────────────────────────────────────────────────────

        builder
            .addCase(TaskThunks.createTaskList.fulfilled, (state, action) => {

            })

        builder
            .addCase(TaskThunks.updateTaskList.fulfilled, (state, action) => {

            })

        builder
            .addCase(TaskThunks.deleteTaskList.fulfilled, (state, action) => {

            })

        builder
            .addCase(TaskThunks.getTaskListsByWorkspaceId.fulfilled, (state, action) => {

            })

        // ─── Task ──────────────────────────────────────────────────────

        builder
            .addCase(TaskThunks.createTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            });

        builder
            .addCase(TaskThunks.updateTask.pending, (state, action) => {
                state.form = {
                    ...state.form,
                    loading: true,
                };
            })
            .addCase(TaskThunks.updateTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(task => task.id === action.payload.id);
                state.tasks[index] = action.payload;
                state.form = { ...state.form, loading: false };
            })
            .addCase(TaskThunks.updateTask.rejected, (state, action) => {
                state.form = {
                    ...state.form,
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
