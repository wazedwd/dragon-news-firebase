import { createBrowserRouter } from "react-router-dom";
import Root from "../component/Root";
import Home from "../component/Home";
import Login from "../component/FromPages/Login";
import Register from "../component/FromPages/Register";
import NewsDetails from "../component/NewsDetails";
import PrivateRoute from "../component/PrivateRoute";

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json'),
            },

             {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
             },

            {
                path: '/login',
                element: <Login></Login>,
            },

            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default Routers;