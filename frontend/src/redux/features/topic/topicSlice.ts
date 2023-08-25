import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TopicState } from "./types";
import { TopicThunks } from "./topicThunks";


const initialState: TopicState = {
    tree: [],
    treeLoading: false,
    topics: [],
    loading: false,
    topic: null
}

export const topic = createSlice({
    name: 'topic',
    initialState: initialState,
    reducers: {
        setOpenTree(state, action: PayloadAction<{ open: boolean, id: string }>) {
            const index = state.tree.findIndex(item => item.root.id === action.payload.id);
            if (index !== -1) state.tree[index] = { ...state.tree[index], open: action.payload.open };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(TopicThunks.delete.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(TopicThunks.delete.fulfilled, (state, action) => {
                state.topics = state.topics.filter(topic => topic.id !== action.meta.arg);
                state.tree = state.tree.filter(item => item.root.id !== action.meta.arg);
                state.loading = false;
            })
            .addCase(TopicThunks.delete.rejected, (state, action) => {
                state.loading = true;
            });

        builder
            .addCase(TopicThunks.getAll.fulfilled, (state, action) => {
                state.topics = action.payload
            })
            .addCase(TopicThunks.getByStatus.fulfilled, (state, action) => {
                state.topics = action.payload;
            })

        builder
            .addCase(TopicThunks.getById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(TopicThunks.getById.fulfilled, (state, action) => {
                state.topic = action.payload;
                state.loading = false;
            })
            .addCase(TopicThunks.getById.rejected, (state, action) => {
                state.loading = true;
            });

        builder
            .addCase(TopicThunks.getByParent.pending, (state, action) => {
                state.treeLoading = true;
            })
            .addCase(TopicThunks.getByParent.fulfilled, (state, action) => {
                const id = action.meta.arg;
                const ids = action.payload.map(item => {
                    const index = state.tree.findIndex(_item => _item.root.id === item.parent);
                    const has = state.tree.findIndex(_item => _item.root.id === item.id);
                    if (index !== -1 && has === -1) state.tree.push({ root: item, children: [], open: false });
                    return item.id
                });
                const index = state.tree.findIndex(item => item.root.id === id);
                state.tree[index] = { ...state.tree[index], open: true, children: ids }
                state.treeLoading = false;
            })
            .addCase(TopicThunks.getByParent.rejected, (state, action) => {
                state.treeLoading = false;
            });

        builder
            .addCase(TopicThunks.getByRoot.pending, (state, action) => {
                state.treeLoading = true;
            })
            .addCase(TopicThunks.getByRoot.fulfilled, (state, action) => {
                state.tree = action.payload.map(topic => ({ root: topic, children: [], open: false }))
                state.treeLoading = false;
            })
            .addCase(TopicThunks.getByRoot.rejected, (state, action) => {
                state.treeLoading = false;
            });
    }
})

export const TopicActions = topic.actions;