import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../Components/Loader/index";
import WishList from "../Pages/Wishlist";
import ContactUs from "../Pages/ContactUs";
const Home = lazy(() => import("../Pages/Home/index"));
const ArtShop = lazy(() => import("../Pages/ArtWork/index"));
const SingleProduct = lazy(() => import("../Pages/ArtWork/SingleProduct"));
const Print3D = lazy(() => import("../Pages/Print3D/index"));
const Print3DSingleProduct = lazy(() =>
  import("../Pages/Print3D/SingleProduct")
);
const About = lazy(() => import("../Pages/About/index"));
const Exhibition = lazy(() => import("../Pages/Exhibition"));
const Checkout = lazy(() => import("../Pages/Checkout"));
const Cart = lazy(() => import("../Pages/Cart"));
const ScreenReader = lazy(() => import("../Components/ScreenTest"));

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/wishlist",
    element: (
      <Suspense fallback={<Loader />}>
        <WishList />
      </Suspense>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/exhibitions",
    element: (
      <Suspense fallback={<Loader />}>
        <Exhibition />
      </Suspense>
    ),
  },
  {
    path: "/artwork-shop",
    element: (
      <Suspense fallback={<Loader />}>
        <ArtShop />
      </Suspense>
    ),
  },
  {
    path: "/artwork-shop/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <SingleProduct />
      </Suspense>
    ),
  },
  {
    path: "/3D-prints",
    element: (
      <Suspense fallback={<Loader />}>
        <Print3D />
      </Suspense>
    ),
  },
  {
    path: "/3D-prints/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <Print3DSingleProduct />
      </Suspense>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Suspense fallback={<Loader />}>
        <ContactUs />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loader />}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<Loader />}>
        <Checkout />
      </Suspense>
    ),
  },
  {
    path: "/test",
    element: (
      <Suspense fallback={<Loader />}>
        <ScreenReader />
      </Suspense>
    ),
  },
]);

export { Routers };
