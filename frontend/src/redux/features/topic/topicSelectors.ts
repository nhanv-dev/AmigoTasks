import { createSelector } from "@reduxjs/toolkit";
import { TopicState } from "./types";

interface PartialTopicState {
    topic: TopicState;
}

const topicStateSelector = (state: PartialTopicState) => state.topic;

export const TopicSelectors = {
    getTopics: () => createSelector(topicStateSelector, ({ topics }) => ({ topics })),

    getTopic: () => createSelector(topicStateSelector, ({ topic }) => ({ topic })),

    getTree: () => createSelector(topicStateSelector, ({ tree }) => ({ tree })),

    getChildren: (id: string) => createSelector(topicStateSelector, ({ tree }) => {
        const children = tree.filter(item => item.root.parent === id);
        return ({ children })
    }),

    getLoading: () => createSelector(topicStateSelector, ({ loading, treeLoading, topicLoading, editLoading }) => ({
        loading, treeLoading, topicLoading, editLoading
    })),

}