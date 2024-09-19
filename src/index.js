import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./Router";
import App from "./App";
import store from "./Redux/cart/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
