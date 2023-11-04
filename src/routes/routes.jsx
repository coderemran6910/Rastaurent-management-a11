import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import AllFoods from "../pages/AllFoods"
import Blog from "../pages/Blog"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children:[
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: "allfoods",
                element: <AllFoods></AllFoods>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
        ]
    },

    // Login. Register Layout 
    {
        path: "/login",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/register",
        element:<RegisterPage></RegisterPage>
    }
])


export default routes