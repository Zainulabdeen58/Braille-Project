import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header";
import ArtShop from "../Pages/ArtWork/index";
import SingleProduct from "../Pages/ArtWork/SingleProduct";
import Print3D from "../Pages/Print3D/Print3D/index";
import Print3DSingleProduct from "../Pages/Print3D/Print3D/SingleProduct"
import CartContents from "../Components/CartContent";
import About from "../Pages/About/About";
const routers =createBrowserRouter([
    {
        path: "/",
        element : <Header/>
    },
    {
        path:"/about-us",
        element: <About/>
    },
    {
        path:"/exhibitions",
        element:"<div>exhibition<div/>"
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
        element:"<div>Contact Us<div/>"
    },
    {
        path:"/view-cart",
        element:<CartContents/>
    }

]);

export { routers};