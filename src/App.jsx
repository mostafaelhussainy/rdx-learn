import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./features/PostsSlice";

const App = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className="app">
            <PostForm />
            <div className="posts">
                {orderedPosts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default App;
