import { Workspace } from "@services/workspace/types";

export type Form = {
    selectedWorkspace: Workspace | null;
    loading: boolean;
    isOpen: boolean;
}

export type WorkspaceState = {
    workspaces: Workspace[];
    workspace: Workspace | null;
    loading: boolean;
    form: Form
}