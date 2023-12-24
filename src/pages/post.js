import { useContext } from "react";
import {useParams, useNavigate} from "react-router-dom";

import PostActions from "../components/post-actions";
import { PostsContext } from "../providers/posts-provider";
import {UserContext} from "../providers/user-provider";

export default function PostPage() {
    const {posts, removePost, isLoading} = useContext(PostsContext);
    const {isLoggedIn} = useContext(UserContext);
    const { postId } = useParams();
    const navigate = useNavigate();
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const post = posts.find((post) => String(post.id) === postId);
    if (!post) {
        return <div>Could not find post</div>;
    }

    return <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {isLoggedIn && <PostActions post={post} removePost={(post) => {
            removePost(post);
            navigate('/posts');
        }}/>}
    </div>;
}