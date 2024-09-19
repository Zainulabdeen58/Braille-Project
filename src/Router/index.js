import { createBrowserRouter } from "react-router-dom";
// import Header from "../Components/Header";
import Home from "../Pages/Home";
import ArtShop from "../Pages/ArtWork/index";
import SingleProduct from "../Pages/ArtWork/SingleProduct";
import Print3D from "../Pages/Print3D/Print3D/index";
import Print3DSingleProduct from "../Pages/Print3D/Print3D/SingleProduct"
import CartContents from "../Components/CartContent";
// import About from "../Pages/About/About";
const routers =createBrowserRouter([
    {
        path: "/",
        element : <Home/>
    },
    {
        path:"/about-us",
        element: <Home/>
    },
    {
        path:"/exhibitions",
        element: <Home/>
    },
    {
        path:"/artwork-shop",
        element:<ArtShop/>
    },
    {
        path:"/artwork-shop/:id",
        element:<SingleProduct/>
    },
    {
        path:"/3D-prints",
        element:<Print3D/>
    },
    {
        path:"/3D-prints/:id",
        element:<Print3DSingleProduct/>
    },
    {
        path:"/contact-us",
        element:<Home/>
    },
    {
        path:"/view-cart",
        element:<CartContents/>
    }

]);

export { routers};