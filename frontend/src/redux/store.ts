import { configureStore } from "@reduxjs/toolkit";
import { task } from './features/task/taskSlice';
import { workspace } from './features/workspace/workspaceSlice';
import { topic } from "./features/topic/topicSlice";

export const store = configureStore({
    reducer: {
        workspace: workspace.reducer,
        topic: topic.reducer,
        task: task.reducer,
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;