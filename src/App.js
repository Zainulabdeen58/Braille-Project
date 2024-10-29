import React, { Suspense } from "react";
import "./index.css";
import store from "./Redux/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./Router";
// import { BallTriangle } from "react-loader-spinner";

export default function App() {
  return (
    <React.StrictMode>
      <PayPalScriptProvider options={{ "client-id": process.env.Client_ID }}>
        <Provider store={store}>
          {/* <Suspense fallback={<BallTriangle/>}> */}
            <RouterProvider router={Routers} />
           
          {/* </Suspense> */}
          <ToastContainer />
        </Provider>
      </PayPalScriptProvider>
    </React.StrictMode>
  );
}

