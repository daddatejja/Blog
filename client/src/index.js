import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import AuthorPosts from './pages/AuthorPosts';
import Authors from './pages/Authors';
import CategoryPosts from './pages/CategoryPosts';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import DeletePost from './pages/DeletePost';
import EditPost from './pages/EditPost';
import Login from './pages/Login';
import Logout from './pages/Logout';
import UserProfile from './pages/UserProfile';
import UserProvider from './context/userContext';
import ChangePassword from './pages/ChangePassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout/></UserProvider>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <PostDetail/>},
      {path: "register", element: <Register/>},
      {path: "posts/users/:id", element: <AuthorPosts/>},
      {path: "authors", element: <Authors/>},
      {path: "posts/categories/:category", element: <CategoryPosts/>},
      {path: "profile/:id/change-password", element: <ChangePassword/>},
      {path: "create", element: <CreatePost/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/:id/delete", element: <DeletePost/>},
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "login", element: <Login/>},
      {path: "logout", element: <Logout/>},
      {path: "profile/:id", element: <UserProfile/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



