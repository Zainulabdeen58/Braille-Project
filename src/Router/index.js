import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/index";
import ArtShop from "../Pages/ArtWork/index";
import SingleProduct from "../Pages/ArtWork/SingleProduct";
import Print3D from "../Pages/Print3D/Print3D/index";
import Print3DSingleProduct from "../Pages/Print3D/Print3D/SingleProduct"
import CartContents from "../Components/ReviewCart";
import About from "../Pages/About/index"
import Exhibition from "../Pages/Exhibition";
import Checkout from "../Components/Checkout";
// import ScreenReader from "../Components/ScreenReader";

const Routers =createBrowserRouter([
    {
        path: "/",
        element : <Home/>
    },
    {
        path:"/about-us",
        element: <About/>
    },
    {
        path:"/exhibitions",
        element: <Exhibition/>
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
    },
    {
        path:"/checkout",
        element:<Checkout/>
    },

]);

export { Routers};