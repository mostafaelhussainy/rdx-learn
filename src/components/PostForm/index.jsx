import React, { useState } from "react";
import "./post-form.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/PostsSlice";

const PostForm = () => {
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addPost(author, content));

        setContent("");
        setAuthor("");
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <textarea
                className="post-input"
                placeholder="Write your post..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                type="text"
                className="author-input"
                placeholder="Your name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit" className="submit-button">
                Post
            </button>
        </form>
    );
};

export default PostForm;
