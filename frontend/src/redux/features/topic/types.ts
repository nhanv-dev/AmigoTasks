import { DetailTopic, Topic, TopicFolder } from "@services/topic/types"

export type TreeItem = {
    root: TopicFolder;
    open: boolean;
    children: string[];
}

export type TopicState = {
    topics: Topic[];
    loading: boolean;

    tree: TreeItem[];
    treeLoading: boolean;
    
    topic: DetailTopic | null;
    editLoading: boolean;
    topicLoading: boolean;
}