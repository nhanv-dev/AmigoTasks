import { configureStore } from "@reduxjs/toolkit";
import { task } from './features/task/taskSlice';
import { workspace } from './features/workspace/workspaceSlice';
import { topic } from "./features/topic/topicSlice";
import { auth } from "./features/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: auth.reducer,
        task: task.reducer,
        topic: topic.reducer,
        workspace: workspace.reducer,
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;