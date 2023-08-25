import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskThunks } from "./taskThunks";
import { Form, TaskState } from "./types";

const initialState: TaskState = {
    tasks: [],
    loading: false,
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

        builder
            .addCase(TaskThunks.create.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })

        builder
            .addCase(TaskThunks.update.pending, (state, action) => {
                state.form = {
                    ...state.form,
                    loading: true,
                };
            })
            .addCase(TaskThunks.update.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(task => task.id === action.payload.id);
                state.tasks[index] = action.payload;
                state.form = { ...state.form, loading: false };
            })
            .addCase(TaskThunks.update.rejected, (state, action) => {
                state.form = {
                    ...state.form,
                    loading: false,
                };
            });

        builder
            .addCase(TaskThunks.delete.pending, (state, action) => {

            })
            .addCase(TaskThunks.delete.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.meta.arg)
            })
            .addCase(TaskThunks.delete.rejected, (state, action) => {

            });

        builder
            .addCase(TaskThunks.getAll.pending, (state, action) => {

            })
            .addCase(TaskThunks.getAll.fulfilled, (state, action) => {
                console.log(state, action)
            })
            .addCase(TaskThunks.getAll.rejected, (state, action) => {
                console.log(state, action)
            });

        builder
            .addCase(TaskThunks.getById.pending, (state, action) => {

            })
            .addCase(TaskThunks.getById.fulfilled, (state, action) => {
                console.log(state, action)
            })
            .addCase(TaskThunks.getById.rejected, (state, action) => {
                console.log(state, action)
            });

        builder
            .addCase(TaskThunks.getByWorkspaceId.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(TaskThunks.getByWorkspaceId.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.loading = false;
            })
            .addCase(TaskThunks.getByWorkspaceId.rejected, (state, action) => {
                state.tasks = [];
                state.loading = false;
            });

    }
})

export const TaskActions = task.actions;
