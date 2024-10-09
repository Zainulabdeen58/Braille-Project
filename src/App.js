import React from "react";
import "./index.css";
import store from "../src/Redux/cart/store/store";  
import { Provider } from "react-redux";  
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { RouterProvider } from "react-router-dom";
import { routers } from "./Router";

export default function App() {
  return (
    <React.StrictMode>
      <PayPalScriptProvider options={{ "client-id": process.env.Client_ID }}>
        <Provider store={store}>
          <RouterProvider router={routers}>
            
          </RouterProvider>
          <ToastContainer />
        </Provider>
      </PayPalScriptProvider>
    </React.StrictMode>
  );
}
