import React from "react";
import "./post.css";
import { useDispatch } from "react-redux";
import { addReaction } from "../../features/PostsSlice";
import { formatDistanceToNow, parseISO } from "date-fns";
const Post = ({ post }) => {
    const { content, author, date, likes, hearts, id } = post;
    const dispatch = useDispatch();

    return (
        <div className="post">
            <p className="post-content">{content.substring(0, 300)}</p>
            <p className="post-author">Author: {author}</p>
            <TimeAgo timestamp={date} />
            <div className="reactions">
                <button onClick={() => dispatch(addReaction({ reaction: "likes", postId: id }))}>
                    Likes: {likes}
                </button>
                <button onClick={() => dispatch(addReaction({ reaction: "hearts", postId: id }))}>
                    Hearts: {hearts}
                </button>
            </div>
        </div>
    );
};

const TimeAgo = ({ timestamp }) => {
    let timeAgo = "";
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`;
    }
    return <p className="post-time">{timeAgo}</p>;
};
export default Post;
