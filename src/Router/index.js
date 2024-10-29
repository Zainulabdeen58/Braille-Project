import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import Loader from "../Components/Loader/index"
// import Home from "../Pages/Home/index"; // Assume Home is not lazy-loaded if it’s the main page
const Home  = lazy(()=> import("../Pages/Home/index"))
const ArtShop = lazy(() => import("../Pages/ArtWork/index"));
const SingleProduct = lazy(() => import("../Pages/ArtWork/SingleProduct"));
const Print3D = lazy(() => import("../Pages/Print3D/index"));
const Print3DSingleProduct = lazy(() => import("../Pages/Print3D/SingleProduct"));
const CartContents = lazy(() => import("../Components/ReviewCart"));
const About = lazy(() => import("../Pages/About/index"));
const Exhibition = lazy(() => import("../Pages/Exhibition"));
const Checkout = lazy(() => import("../Pages/Checkout"));
const ScreenReader = lazy(() => import("../Components/ScreenTest"));

// Fallback component for lazy loading
// const Loader = <div>Loading...</div>;

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/try",
    element: (
      <Suspense fallback={<Loader/>}>
        <ScreenReader />
      </Suspense>
    )
  },
  {
    path: "/about-us",
    element: (
      <Suspense fallback={<Loader/>}>
        <About />
      </Suspense>
    )
  },
  {
    path: "/exhibitions",
    element: (
      <Suspense fallback={<Loader/>}>
        <Exhibition />
      </Suspense>
    )
  },
  {
    path: "/artwork-shop",
    element: (
      <Suspense fallback={<Loader/>}>
        <ArtShop />
      </Suspense>
    )
  },
  {
    path: "/artwork-shop/:id",
    element: (
      <Suspense fallback={<Loader/>}>
        <SingleProduct />
      </Suspense>
    )
  },
  {
    path: "/3D-prints",
    element: (
      <Suspense fallback={<Loader/>}>
        <Print3D />
      </Suspense>
    )
  },
  {
    path: "/3D-prints/:id",
    element: (
      <Suspense fallback={<Loader/>}>
        <Print3DSingleProduct />
      </Suspense>
    )
  },
  {
    path: "/contact-us",
    element: <Home />
  },
  {
    path: "/view-cart",
    element: (
      <Suspense fallback={<Loader/>}>
        <CartContents />
      </Suspense>
    )
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<Loader/>}>
        <Checkout />
      </Suspense>
    )
  }
]);

export { Routers };
