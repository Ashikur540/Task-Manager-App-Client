import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import MyTasks from "../pages/MyTasks";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/add",
                element: <Home></Home>
            },
            {
                path: "/my-tasks",
                element: <MyTasks></MyTasks>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]

    },
])