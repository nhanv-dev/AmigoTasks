import { CreateWorkspace, UpdateWorkspace, Workspace } from './types';
import { HttpRequest } from "@util/HttpRequest";


class WorkspaceService {

    public async create(createWorkspace: CreateWorkspace) {
        return HttpRequest.post<Workspace>('/workspaces', createWorkspace);
    }

    public async update(updateWorkspace: UpdateWorkspace) {
        return HttpRequest.put<Workspace>(`/workspaces/${updateWorkspace.id}`, updateWorkspace);
    }

    public async delete(id: string) {
        return HttpRequest.delete<void>(`/workspaces/${id}`);
    }

    public async getAll() {
        return HttpRequest.get<Workspace[]>('/workspaces');
    }

    public async getById(id: string) {
        return HttpRequest.get<Workspace>(`/workspaces/${id}`);
    }
}


const workspaceService = new WorkspaceService();
export default workspaceService; 