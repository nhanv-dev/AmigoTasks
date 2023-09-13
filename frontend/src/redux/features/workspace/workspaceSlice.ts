import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Workspace } from "@services/workspace/types";
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
        },
        setWorkspace(state, action: PayloadAction<Workspace | null>) {
            state.workspace = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(WorkspaceThunks.create.pending, (state, action) => {
                state.form.loading = true;
            })
            .addCase(WorkspaceThunks.create.fulfilled, (state, action) => {
                state.workspaces.push(action.payload)
                state.form.loading = false;
                state.form.isOpen = false;
            })
            .addCase(WorkspaceThunks.create.rejected, (state, action) => {
                state.form.loading = false;
            });

        builder
            .addCase(WorkspaceThunks.update.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(WorkspaceThunks.update.fulfilled, (state, action) => {
                state.workspaces = state.workspaces.map(workspace => {
                    if (workspace.id === action.payload.id) return action.payload;
                    return workspace;
                })
                state.loading = false;
            })
            .addCase(WorkspaceThunks.update.rejected, (state, action) => {
                state.loading = false;
            });

        builder
            .addCase(WorkspaceThunks.delete.fulfilled, (state, action) => {
                const index = state.workspaces.findIndex(workspace => workspace.id === action.meta.arg);
                state.workspaces.splice(index, 1);
            })

        builder
            .addCase(WorkspaceThunks.getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(WorkspaceThunks.getAll.fulfilled, (state, action) => {
                state.loading = false;
                state.workspaces = action.payload;
            })
            .addCase(WorkspaceThunks.getAll.rejected, (state, action) => {
                state.loading = false;
                state.workspaces = [];
            });

        builder
            .addCase(WorkspaceThunks.getById.pending, (state, action) => {

            })
            .addCase(WorkspaceThunks.getById.fulfilled, (state, action) => {
                const index = state.workspaces.findIndex(workspace => workspace.id === action.payload.id);
                if (index !== -1) state.workspaces[index] = action.payload;
                else state.workspaces.push(action.payload)
            })
            .addCase(WorkspaceThunks.getById.rejected, (state, action) => {
                console.log(state, action)
            });


        // builder
        //     .addCase(TaskThunks.create.fulfilled, (state, action) => {
        //         const index = state.workspaces.findIndex(workspace => workspace.id === action.payload.workspace);
        //         state.workspaces[index]
        //     })
        //     .addCase(TaskThunks.update.fulfilled, (state, action) => {
        //         console.log(state, action)
        //     })
        //     .addCase(TaskThunks.delete.fulfilled, (state, action) => {
        //         console.log(state, action)
        //     });

    }
})

export const WorkspaceActions = workspace.actions;
