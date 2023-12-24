import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/home";
import Posts from "./pages/posts";
import PostPage from "./pages/post";
import EditPost from "./pages/edit-post";
import Admin from "./pages/admin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'posts',
                element: <Posts />
            },
            {
                path: 'posts/:postId',
                element: <PostPage />
            },
            {
                path: 'posts/:postId/edit',
                element: <EditPost />
            },
            {
                path: 'admin',
                element: <Admin />
            }
        ]
    }
]);