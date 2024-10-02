import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./Router";
import App from "./App";
import store from "./Redux/cart/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={{"client-id" : process.env.Client_ID}}>
    <Provider store={store}>
      <RouterProvider router={routers}>
       <App /> 
      </RouterProvider>
      <ToastContainer />
    </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);
