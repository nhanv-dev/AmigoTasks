import { DetailTopic, Topic } from "@services/topic/types"

export type Tree = {
    root: Topic;
    open: boolean;
    children: string[];
}

export type TopicState = {
    tree: Tree[];
    treeLoading: boolean;
    topics: Topic[];
    topic: DetailTopic | null;
    loading: boolean;
}