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
import UpdateFood from "../pages/userPages/UpdateFood"


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<Error404></Error404>,
        children:[
            {
                index: true,
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('https://restaurent-server.vercel.app/api/v1/top-ordered-items')
            },
            {
                path: "allfoods",
                element: <AllFoods></AllFoods>,
                loader: ()=>fetch('https://restaurent-server.vercel.app/api/v1/foodcount')
            },
            {
                path: "allfoods/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({params})=> fetch(`https://restaurent-server.vercel.app/api/v1/foods/${params.id}`)
            },
            {
                path: "foodpurchase/:id",
                element: <PrivateRoute><FoodPurchas></FoodPurchas></PrivateRoute>,
                loader: ({params})=> fetch(`https://restaurent-server.vercel.app/api/v1/foods/${params.id}`)
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
                path: "myfoods/:email",
                element: <MyFoods></MyFoods>,
                loader: ({params})=> fetch (`https://restaurent-server.vercel.app/api/v1/products/${params.email}`)
            },
            {
                path:"orders/:email",
                element: <MyOrder></MyOrder>,
                loader:({params})=> fetch(`https://restaurent-server.vercel.app/api/v1/orders/${params?.email}`)
            },
            {
                index:true,
                path: "/profile",
                element: <AddFood></AddFood>
            },
            {
                path:"updatefood/:id",
                element: <UpdateFood></UpdateFood>,
                loader: ({params})=> fetch (`https://restaurent-server.vercel.app/api/v1/foods/${params.id}`)

            }
        ]
    }
])


export default routes 