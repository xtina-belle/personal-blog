import PostCard from './post-card';

export default function PostList({allPosts, removePost, isUpdateEnabled}) {
    return <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', rowGap: 10}}>
        {allPosts.map((post) => <PostCard post={post} isUpdateEnabled={isUpdateEnabled} removePost={removePost}/>)}
    </div>
}