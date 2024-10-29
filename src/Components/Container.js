// import React, { useEffect } from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import ViewCart from "./ViewCart";
// import Accessibility from "./Accessibility";
// import { useSelector } from "react-redux";

// function Container({ children }) {
//   const isSaturation = useSelector((state) => state.accessibility.isSaturation);
//   useEffect(() => {
//     const Wrapper = document.getElementById("Main");
//     Wrapper.classList.toggle("saturate-200", isSaturation);
//   },[isSaturation]);

//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <ViewCart />
//       <Accessibility />
//       <div id="Main">{children}</div>
//     </div>
//   );
// }

// export default Container;



import React, { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ViewCart from "./ViewCart";
import Accessibility from "./Accessibility";
import { useSelector } from "react-redux";


function Container({ children }) {
  const isSaturation = useSelector((state) => state.accessibility.isSaturation);

  useEffect(() => {
    const Wrapper = document.getElementById("Main");
    Wrapper.classList.toggle("saturate-200", isSaturation);
  }, [isSaturation]);

  return (
    <div>
      <Header />
      <Navbar />
      <ViewCart />
      <Accessibility />
      
      {/* Lazy loading the children */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <div id="Main">{children}</div>
      {/* </Suspense> */}
    </div>
  );
}

export default Container;
