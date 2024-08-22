import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header";

const routers =createBrowserRouter([
    {
        path: "/",
        element : <Header/>
    },
    {
        path:"/about",
        element:"<div>About<div/>"
    },
    {
        path:"/exhibitions",
        element:"<div>exhibition<div/>"
    },
    {
        path:"/art-shop",
        element:"<div>art shop<div/>"
    },
    {
        path:"/3D-prints",
        element:"<div>art shop<div/>"
    },
    {
        path:"/contact-us",
        element:"<div>Contact Us<div/>"
    }
]);

export { routers};