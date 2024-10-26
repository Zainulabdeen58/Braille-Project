import React, { Suspense } from "react";
import "./index.css";
import store from "./Redux/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./Router";

export default function App() {
  return (
    <React.StrictMode>
      <PayPalScriptProvider options={{ "client-id": process.env.Client_ID }}>
        <Provider store={store}>
          <Suspense fallback={<div>Loading.....</div>}>
            <RouterProvider router={Routers}>

            </RouterProvider>
          </Suspense>
          <ToastContainer />
        </Provider>
      </PayPalScriptProvider>
    </React.StrictMode>
  );
}

// import React from "react";
// import "./index.css";
// import store from "./Redux/store/store";
// import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import { RouterProvider } from "react-router-dom";
// import { Routers } from "./Router";

// // Import the components for zoom and pan
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import Controls from "./Components/Controls"; // Assuming you placed Controls in a separate file

// export default function App() {
//   return (
//     <React.StrictMode>
//       <PayPalScriptProvider options={{ "client-id": process.env.Client_ID }}>
//         <Provider store={store}>
//           <TransformWrapper initialScale={1} initialPositionX={100} initialPositionY={100}>

//               <>
//                 <Controls />
//                 <TransformComponent>
//                   <RouterProvider router={Routers} />
//                 </TransformComponent>
//               </>

//           </TransformWrapper>
//           <ToastContainer />
//         </Provider>
//       </PayPalScriptProvider>
//     </React.StrictMode>
//   );
// }
