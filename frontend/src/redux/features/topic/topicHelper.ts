import { DetailTopic, Topic, TopicFolder } from "@services/topic/types";
import { TreeItem } from "./types";


export default class TopicHelper {

    static updateWhenCreate(
        tree: TreeItem[],
        topics: Topic[],
        detailTopic: DetailTopic,
    ) {
        const parentId = detailTopic.parent?.id;
        const treeItem = TopicHelper.convertDetailTopicToTreeItem(detailTopic);
        const topic = TopicHelper.convertDetailTopicToTopic(detailTopic);
        topics.push(topic);
        tree.push(treeItem);

        if (parentId) {
            const index = tree.findIndex(item => item.root.id === parentId);
            const { root, open } = tree[index];
            const numberOfChildren = root.numberOfChildren + 1;
            tree[index] = {
                open,
                children: [...tree[index].children, treeItem.root.id],
                root: { ...root, numberOfChildren },
            }
        }

        return tree;
    }

    static updateWhenDelete(
        tree: TreeItem[],
        topics: Topic[],
        id: string,
    ) {
        const positionTree = tree.findIndex(item => item.root.id === id);
        const positionTopic = topics.findIndex(item => item.id === id);
        if (positionTree !== -1) {
            if (tree[positionTree].root.parent) {
                const index = tree.findIndex(item => item.root.id === tree[positionTree].root.parent);
                tree[index].root.numberOfChildren = tree[index].root.numberOfChildren - 1;
            }
            tree.splice(positionTree, 1);
        }
        if (positionTopic !== -1) {
            if (topics[positionTopic].parent) {
                const index = topics.findIndex(item => item.id === topics[positionTopic].parent?.id);
                topics[index].numberOfChildren = topics[index]?.numberOfChildren - 1;
            }
            tree.splice(positionTopic, 1);
        }
    }

    static convertDetailTopicToFolder(detailTopic: DetailTopic): TopicFolder {
        const root = {
            ...detailTopic,
            parent: !!detailTopic.parent ? detailTopic.parent.id : null,
            path: detailTopic.path.map(p => p.id)
        }
        return root;
    }
    static convertDetailTopicToTreeItem(detailTopic: DetailTopic): TreeItem {
        const root = {
            ...detailTopic,
            parent: !!detailTopic.parent ? detailTopic.parent.id : null,
            path: detailTopic.path.map(p => p.id)
        }
        return { root, children: [], open: false };
    }


    static convertDetailTopicToTopic(detailTopic: DetailTopic): Topic {
        return {
            ...detailTopic,
            parent: !!detailTopic.parent ? detailTopic.parent : null,
            path: detailTopic.path.map(p => p.id)
        }
    }
}