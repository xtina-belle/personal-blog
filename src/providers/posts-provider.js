import { createContext, useState, useEffect } from "react";
import {v4 as uuid} from 'uuid';

export const PostsContext = createContext();

export function PostsProvider({children}){
    const [posts, setPosts] = useState();

    const addPost = (post) => {
        updatePosts([...posts, {...post, id: uuid()}])
    }

    const editPost = (editedPost) => {
      const newPosts = posts.filter((post) => post.id !== editedPost.id);
      newPosts.push(editedPost);
      updatePosts(newPosts);
    }

    const removePost = (postToRemove) => {
      updatePosts(posts.filter((post) => post.id !== postToRemove.id))
    }

    const updatePosts = (posts) => {
      setPosts(posts);
      localStorage.setItem('posts', JSON.stringify(posts));
    }

    useEffect(() => {
      const posts = localStorage.getItem('posts');
      console.log(posts);
      if (posts) {
        setPosts(JSON.parse(posts));
      } else {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => updatePosts(posts));
      }
    }, []);
    
    return (
      <PostsContext.Provider value={{posts, isLoading: posts === undefined, setPosts, addPost, editPost, removePost}}>
        {children}
      </PostsContext.Provider>
    );
}