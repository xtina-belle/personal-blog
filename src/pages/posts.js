import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';

import PostList from '../components/post-list';
import { PostsContext } from '../providers/posts-provider';
import { UserContext } from '../providers/user-provider';

export default function Posts() {
    const {posts, isLoading, removePost} = useContext(PostsContext);
    const {isLoggedIn} = useContext(UserContext);

    const [filter, setFilter] = useState();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const filteredPosts = filter ? posts.filter((post => post.title.includes(filter))) : posts;
    return (
        <>
            <h2>Posts: {posts.length}</h2>
            <TextField id="outlined-basic" label="Search post..." variant="outlined" value={filter} onChange={(event) => setFilter(event.target.value)}/>

            <PostList allPosts={filteredPosts} isUpdateEnabled={isLoggedIn} removePost={removePost}/>
        </>
        
    );
}