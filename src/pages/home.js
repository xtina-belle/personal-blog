import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import PostList from '../components/post-list';
import { PostsContext } from '../providers/posts-provider';
import { UserContext } from '../providers/user-provider';

export default function Home() {
    const {posts, isLoading, removePost} = useContext(PostsContext);
    const {isLoggedIn} = useContext(UserContext);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <section>
        {isLoggedIn && <Typography variant="h4" gutterBottom>Welcome to the posts app</Typography>}
        <Typography variant="h3" gutterBottom>My Posts</Typography>
        <Link to={`posts`}>View all</Link>
        <PostList allPosts={posts.slice(-3)} isUpdateEnabled={isLoggedIn} removePost={removePost}/>
    </section>;
}