import { useContext } from "react";
import {useParams, useNavigate} from "react-router-dom";

import { PostsContext } from "../providers/posts-provider";
import {UserContext} from "../providers/user-provider";
import PostForm from "../components/post-form";

export default function EditPost() {
    const {posts, editPost, isLoading} = useContext(PostsContext);
    const {isLoggedIn} = useContext(UserContext);
    const { postId } = useParams();
    const navigate = useNavigate();
    
    if (!isLoggedIn) {
        navigate('/');
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const post = posts.find((post) => String(post.id) === postId);
    if (!post) {
        return <div>Could not find post</div>;
    }

    return <div>
        <h2>{`Edit Post ${post.title}`}</h2>
        <PostForm title={post.title} body={post.body} onSubmit={(formData) => editPost({...post, ...formData})} submitText="Update"/>
    </div>;
}