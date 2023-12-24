import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function PostActions({post, removePost}) {
    const navigate = useNavigate();

    return <div>
        <Button variant="outlined" onClick={() => removePost(post)}>Delete Post</Button>
        <Button variant="outlined" onClick={() => navigate(`/posts/${post.id}/edit`)}>Update Post</Button>
    </div>;
}