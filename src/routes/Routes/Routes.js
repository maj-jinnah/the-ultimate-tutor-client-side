import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home";
import Courses from "../../pages/Courses.js"
import LogIn from "../../pages/LogIn";
import Blog from "../../pages/Blog";
import Register from "../../pages/Register";
import ErrorPage from "../../pages/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch("http://localhost:5000/courses"),
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])