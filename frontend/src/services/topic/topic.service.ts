import { HttpRequest } from "@util/HttpRequest";
import { QueryFormatter } from '@util/QueryFormatter';
import { CreateTopic, DetailTopic, Topic, UpdateTopic } from "./types";


class TopicService {

    public async create(createTopic: CreateTopic) {
        return HttpRequest.post<Topic>('/topics', createTopic);
    }

    public async update(updateTopic: UpdateTopic) {
        return HttpRequest.put<Topic>(`/topics/${updateTopic.id}`, updateTopic);
    }

    public async delete(id: string) {
        return HttpRequest.delete<void>(`/topics/${id}`);
    }

    public async getAll() {
        return HttpRequest.get<Topic[]>('/topics');
    }

    public async getByConditions(conditions: any) {
        const query = QueryFormatter.format(conditions)
        return HttpRequest.get<Topic[]>(`/topics?${query}`);
    }

    public async getByParent(parent: string) {
        return HttpRequest.get<Topic[]>(`/topics/${parent}/children`);
    }

    public async getByRoot() {
        return HttpRequest.get<Topic[]>(`/topics/children`);
    }

    public async getById(id: string) {
        return HttpRequest.get<DetailTopic>(`/topics/${id}`);
    }

}
const topicService = new TopicService();
export default topicService; 