import { createSelector } from "@reduxjs/toolkit";
import { WorkspaceState } from "./types";

interface PartialWorkspaceState {
    workspace: WorkspaceState;
}

const workspaceStateSelector = (state: PartialWorkspaceState) => state.workspace;

export const WorkspaceSelectors = {
    getForm: () => createSelector(workspaceStateSelector, ({ form }) => form),

    getAllWorkspaces: () => createSelector(workspaceStateSelector, ({ workspaces }) => workspaces),

    getWorkspace: () => createSelector(workspaceStateSelector, ({ workspace, loading }) => ({ workspace, loading })),

}