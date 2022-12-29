import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import MyTasks from "../pages/MyTasks";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";

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
        ]

    },
])