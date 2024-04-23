import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/PostsSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    },
});
