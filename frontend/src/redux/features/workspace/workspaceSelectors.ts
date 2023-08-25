import { createSelector } from "@reduxjs/toolkit";
import { WorkspaceState } from "./types";

interface PartialWorkspaceState {
    workspace: WorkspaceState;
}

const workspaceStateSelector = (state: PartialWorkspaceState) => state.workspace;

export const WorkspaceSelectors = {
    getForm: () => createSelector(workspaceStateSelector, ({ form }) => form),

    getWorkspaces: () => createSelector(workspaceStateSelector, ({ workspaces, loading }) => ({ workspaces, loading })),

    getWorkspace: () => createSelector(workspaceStateSelector, ({ workspace, loading }) => ({ workspace, loading })),

}