import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home";
import Courses from "../../pages/Courses.js"
import LogIn from "../../pages/LogIn";
import Blog from "../../pages/Blog";
import Register from "../../pages/Register";
import ErrorPage from "../../pages/ErrorPage";
import CardDetails from "../../pages/CardDetails";
import CheckOut from "../../pages/CheckOut";
import FAQ from "../../pages/FAQ";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch("https://the-ultimate-tutor-server-side.vercel.app/courses"),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://the-ultimate-tutor-server-side.vercel.app/courses/${params.id}`),
                element: <CardDetails></CardDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://the-ultimate-tutor-server-side.vercel.app/courses/${params.id}`),
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
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
                path: '/faq',
                element: <FAQ></FAQ>
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