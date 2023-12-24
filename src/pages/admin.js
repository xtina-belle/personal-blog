import { useContext } from "react";
import { PostsContext } from "../providers/posts-provider";

import PostForm from "../components/post-form";

export default function Admin() {
    const {addPost} = useContext(PostsContext);

    return (
        <div>
            <h1>Admin</h1>
            <PostForm onSubmit={addPost} submitText="Create"/>
        </div>
    );
}