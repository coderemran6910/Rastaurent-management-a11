import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import AllFoods from "../pages/AllFoods"
import Blog from "../pages/Blog"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Error404 from "../pages/Error404"
import UserLayout from "../layout components/UserLayout"
import MyOrder from "../pages/userPages/MyOrder"
import MyFoods from "../pages/userPages/MyFoods"
import AddFood from "../pages/userPages/AddFood"
import PrivateRoute from "../components/PrivateRoute"
import FoodDetails from "../components/FoodDetails"
import FoodPurchas from "../pages/FoodPurchas"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<Error404></Error404>,
        children:[
            {
                index: true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: "allfoods",
                element: <AllFoods></AllFoods>,
                loader: ()=> fetch('http://localhost:5000/api/v1/foodcount')
            },
            {
                path: "allfoods/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/foods/${params.id}`)
            },
            {
                path: "foodpurchase/:id",
                element: <PrivateRoute><FoodPurchas></FoodPurchas></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/foods/${params.id}`)
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
    },

    // User Layout
    {
        path: "/profile",
        errorElement: <Error404></Error404>,
        element: <PrivateRoute><UserLayout></UserLayout></PrivateRoute> ,
        children:[
            {
                index:true, 
                path: "myfoods",
                element: <MyFoods></MyFoods>
            },
            {
                path:"orders/:email",
                element: <MyOrder></MyOrder>,
                loader:({params})=> fetch(`http://localhost:5000/api/v1/orders/${params?.email}`)
            },
            {
                path: "addfood",
                element: <AddFood></AddFood>
            }
        ]
    }
])


export default routes