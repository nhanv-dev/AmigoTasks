import { createSelector } from "@reduxjs/toolkit";
import { TopicState } from "./types";

interface PartialTopicState {
    topic: TopicState;
}

const topicStateSelector = (state: PartialTopicState) => state.topic;

export const TopicSelectors = {
    getTree: () => createSelector(topicStateSelector, ({ tree, loading }) => ({ tree, loading })),

    getChildren: (id: string) => createSelector(topicStateSelector, ({ tree, loading }) => {
        const children = tree.filter(item => item.root.parent === id);
        return ({ children, loading })
    }),

    getTopics: () => createSelector(topicStateSelector, ({ topics, loading }) => ({ topics, loading })),

    getTopic: () => createSelector(topicStateSelector, ({ topic, loading }) => ({ topic, loading })),

}