import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PostActions from './post-actions';
import { Button } from '@mui/base';

export default function PostCard({post, isUpdateEnabled, removePost}) {
    const onCopyHandler = (event) => {
        event.preventDefault();
        alert('Copy is not allowed');
    }

    return <Card sx={{ width: 345 }}>
        <CardContent>
            <Accordion elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{post.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" color="text.secondary" onCopy={onCopyHandler}>
                        {post.body}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Link to={ `/posts/${post.id}`}>
                Read more
            </Link> 
        </CardContent>
       {isUpdateEnabled && <CardActions>
            <PostActions post={post} removePost={removePost}/>
        </CardActions>}
    </Card>;
}