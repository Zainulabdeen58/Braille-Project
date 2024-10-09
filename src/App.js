// App.js
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/home";
// import ArtShop from "../Pages/ArtWork/index";
// import SingleProduct from "../Pages/ArtWork/SingleProduct";
// import Print3D from "../Pages/Print3D/Print3D/index";
// import Print3DSingleProduct from "../Pages/Print3D/Print3D/SingleProduct";
// import CartContents from "../Components/ReviewCart";
// import About from "../Pages/About/index";
// import Exhibition from "../Pages/Exhibition";
// import Checkout from "../Components/Checkout";
import store from "../src/Redux/cart/store/store";  // Redux store
import { Provider } from "react-redux";  // Redux Provider
import { ToastContainer } from "react-toastify";  // Toast notifications
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function App() {
  return (
    <React.StrictMode>
      <PayPalScriptProvider options={{ "client-id": "AZl8HMPKdOuKmv7mxEyWeAoJWwIcMwCCEwrKV9CohV6gUK5k__uHfGjIs-QUuRztp5RvUJ-rMlmzRVmg" }}>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              {/* <Route path="/about-us" element={<About />} /> */}
              {/* <Route path="/exhibitions" element={<Exhibition />} /> */}
              {/* <Route path="/artwork-shop" element={<ArtShop />} /> */}
              {/* <Route path="/artwork-shop/:id" element={<SingleProduct />} /> */}
              {/* <Route path="/3D-prints" element={<Print3D />} /> */}
              {/* <Route path="/3D-prints/:id" element={<Print3DSingleProduct />} /> */}
              <Route path="/contact-us" element={<div>Hello world</div>} />
              {/* <Route path="/view-cart" element={<CartContents />} /> */}
              {/* <Route path="/checkout" element={<Checkout />} /> */}
            </Routes>
          </Router>
          <ToastContainer />
        </Provider>
      </PayPalScriptProvider>
    </React.StrictMode>
  );
}
