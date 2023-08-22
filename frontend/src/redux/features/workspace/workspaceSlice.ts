import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Form, WorkspaceState } from "./types";
import { WorkspaceThunks } from "./workspaceThunks";


const initialState: WorkspaceState = {
    workspaces: [],
    workspace: null,
    loading: false,
    form: {
        selectedWorkspace: null,
        loading: false,
        isOpen: false,
    }
}

export const workspace = createSlice({
    name: 'workspace',
    initialState: initialState,
    reducers: {
        setForm(state, action: PayloadAction<Partial<Form>>) {
            state.form = { ...state.form, ...action.payload }
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(WorkspaceThunks.create.pending, (state, action) => {

            })
            .addCase(WorkspaceThunks.create.fulfilled, (state, action) => {
                console.log(state, action)
            })
            .addCase(WorkspaceThunks.create.rejected, (state, action) => {
                console.log(state, action)
            });

        builder
            .addCase(WorkspaceThunks.update.pending, (state, action) => {

            })
            .addCase(WorkspaceThunks.update.fulfilled, (state, action) => {

            })
            .addCase(WorkspaceThunks.update.rejected, (state, action) => {

            });

        builder
            .addCase(WorkspaceThunks.delete.pending, (state, action) => {

            })
            .addCase(WorkspaceThunks.delete.fulfilled, (state, action) => {

            })
            .addCase(WorkspaceThunks.delete.rejected, (state, action) => {

            });

        builder
            .addCase(WorkspaceThunks.getAll.pending, (state, action) => {

            })
            .addCase(WorkspaceThunks.getAll.fulfilled, (state, action) => {
                console.log(state, action)
            })
            .addCase(WorkspaceThunks.getAll.rejected, (state, action) => {
                console.log(state, action)
            });

        builder
            .addCase(WorkspaceThunks.getById.pending, (state, action) => {

            })
            .addCase(WorkspaceThunks.getById.fulfilled, (state, action) => {
                console.log(state, action)
            })
            .addCase(WorkspaceThunks.getById.rejected, (state, action) => {
                console.log(state, action)
            });

    }
})

export const WorkspaceActions = workspace.actions;
