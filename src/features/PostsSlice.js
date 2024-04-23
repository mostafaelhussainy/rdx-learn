import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "g1347asdaw-e53287dsgkifgh",
        content: "This is the first post!",
        author: "John Doe",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        likes: 10,
        hearts: 5,
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // addPost(state, action) {
        //     state.push(action.payload);
        // },
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(author, content) {
                return {
                    payload: {
                        author,
                        content,
                        id: nanoid(),
                        date: new Date().toISOString(),
                        likes: 0,
                        hearts: 0,
                    },
                };
            },
        },
        addReaction(state, action) {
            debugger;
            const { postId, reaction } = action.payload;
            // state = state.map((post) => {
            //     const { id } = post;
            //     if (postId !== id) return post;
            //     return post[reaction]++;
            // });
            const existingPost = state.find((post) => post.id === postId);
            if (existingPost) {
                existingPost[reaction]++;
            }
        },
    },
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;

export const { addPost, addReaction } = postsSlice.actions;
