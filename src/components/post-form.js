import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PostForm({title, body, onSubmit, submitText}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit((formData) => {
            onSubmit(formData);
            navigate('/');
        })}>
            <div style={{display: 'flex', gap: 5, justifyContent: 'center'}}>
                <TextField error={errors.title} helperText={errors.title?.message} id="title" label="Title" defaultValue={title} variant="standard" {...register("title", { required: "Title is required" })}/>
                <TextField id="body" label="Content" defaultValue={body} variant="standard" {...register("body")}/>
                <Button variant="outlined" type="submit">{submitText}</Button>
            </div>
        </form>
    );
}
