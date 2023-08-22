import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateWorkspace, UpdateWorkspace, Workspace } from "@services/workspace/types";
import workspaceService from "@services/workspace/workspace.service";


export const WorkspaceThunks = {
  create: createAsyncThunk<Workspace, CreateWorkspace>("workspace/create", async (createWorkspace) => {
    return await workspaceService.create(createWorkspace);
  }),

  update: createAsyncThunk<Workspace, UpdateWorkspace>("workspace/update", async (updateWorkspace) => {
    return await workspaceService.update(updateWorkspace);
  }),

  delete: createAsyncThunk<void, string>("workspace/delete", async (id) => {
    return await workspaceService.delete(id);
  }),

  getAll: createAsyncThunk<Workspace[], void>("workspace/get-all", async () => {
    return workspaceService.getAll();
  }),

  getById: createAsyncThunk<Workspace, string>("workspace/get-by-id", async (id) => {
    return await workspaceService.getById(id);
  }),
}