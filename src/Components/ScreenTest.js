// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toggleSpeak } from "../Redux/cart/accessibility";

// // const MyComponent = () => {
// //   const dispatch = useDispatch();
// //   const isSpeechEnabled = useSelector((state)=> state.accessibility.isSpeechEnabled);

// //   const [text, setText] = useState(""); // State to hold current text input

// //   const handleSpeak = (newText) => {
// //     speakText(newText); // Automatically stops any previous speech and speaks the new text
// //   };

// //   return (
// //     <div>
// //       <label className="inline-flex items-center cursor-pointer">
// //         <input
// //           type="checkbox"
// //           onClick={() => dispatch(toggleSpeak())}
// //           value={isSpeechEnabled}
// //           className="sr-only peer"
// //         />
// //         <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
// //         <span className="ms-3 text-sm font-medium text-gray-900 ">
// //           {isSpeechEnabled ? "Voice ON" : "Voice OFF"}
// //         </span>
// //       </label>
// //       <textarea
// //         value={text}
// //         onChange={(event) => setText(event.target.value)}
// //         placeholder="Type something"
// //       />
// //       <div>
// //         <button onClick={() => handleSpeak(text)} disabled={speaking} className="btn">
// //           {speaking ? "Speaking..." : "Speak"}
// //         </button>
// //         <button onClick={stopSpeech} disabled={!speaking} className="btn">
// //           Stop
// //         </button>
// //       </div>

// //       {/* Examples of clickable text to trigger speech */}
// //       <div>
// //         <p onClick={() => handleSpeak("This is the first text to speak")}>
// //           Speak this text
// //         </p>
// //         <p onClick={() => handleSpeak("Here is another text to be spoken")}>
// //           Speak another text
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MyComponent;

// import React, { useState } from "react";

// const ScreenZoomComponent = () => {
//   const [zoomLevel, setZoomLevel] = useState(1); // 1 represents 100% zoom (normal size)

//   const zoomIn = () => {
//     if (zoomLevel < 1.5) {
//       setZoomLevel(zoomLevel + 0.1); // Increase zoom by 10%, max 150%
//     }
//   };

//   const zoomOut = () => {
//     if (zoomLevel > 1) {
//       setZoomLevel(zoomLevel - 0.1); // Decrease zoom by 10%, min 100%
//     }
//   };

//   return (
//     <div>
//       {/* Apply the zoom level to the body or root container */}
//       <div
//         style={{
//           transform: `scale(${zoomLevel})`,
//           transformOrigin: "0 0", // Ensure zoom starts from top-left corner
//           width: `${100 / zoomLevel}%`, // Adjust width to prevent horizontal scrolling
//           height: `${100 / zoomLevel}%`, // Adjust height to prevent vertical scrolling
//           transition: "transform 0.2s ease-in-out"
//         }}
//       >
//         <p>
//           This is a screen zoom example. The entire page content will be zoomed in and out between 100% and 150% of the original size.
//         </p>
//       </div>

//       <button onClick={zoomIn} style={{ marginRight: "10px" }}>
//         Zoom In
//       </button>
//       <button onClick={zoomOut}>Zoom Out</button>
//     </div>
//   );
// };

// export default ScreenZoomComponent;

// import React, { useState, useEffect } from 'react';
// // import './App.css';

// const ScreenReader = () => {
//   const [scale, setScale] = useState(1); // Default zoom level

//   // useEffect for setting up event listeners
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.ctrlKey && (e.key === '=' || e.key === '+')) {
//         e.preventDefault();
//         zoomIn();
//       } else if (e.ctrlKey && e.key === '-') {
//         e.preventDefault();
//         zoomOut();
//       } else if (e.ctrlKey && e.key === '0') {
//         e.preventDefault();
//         resetZoom();
//       }
//     };

//     const handleWheel = (e) => {
//       if (e.ctrlKey) {
//         e.preventDefault();
//         if (e.deltaY < 0) {
//           zoomIn();
//         } else {
//           zoomOut();
//         }
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     window.addEventListener('wheel', handleWheel);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       window.removeEventListener('wheel', handleWheel);
//     };
//   }, []);

//   // Function to increase zoom
//   const zoomIn = () => {
//     setScale((prevScale) => prevScale + 0.1);
//   };

//   // Function to decrease zoom
//   const zoomOut = () => {
//     setScale((prevScale) => (prevScale > 0.1 ? prevScale - 0.1 : prevScale));
//   };

//   // Function to reset zoom to default
//   const resetZoom = () => {
//     setScale(1); // Reset to default scale
//   };

//   return (
//     <div
//       className="app"
//       style={{
//         transform: `scale(${scale})`,
//         transformOrigin: 'center top', // Ensures zoom is centered
//         transition: 'transform 0.2s ease-in-out', // Smooth zoom effect
//       }}
//     >
//       <h1>React Chrome-Like Zoom Example</h1>
//       <p>Use <strong>Ctrl +</strong> to zoom in, <strong>Ctrl -</strong> to zoom out, and <strong>Ctrl 0</strong> to reset zoom.</p>
//       <p>Zoom with <strong>Ctrl + Scroll</strong> for fine-grained control.</p>

//       <div className="content-box">
//         <h3>Content Box 1</h3>
//         <p>This content will zoom in and out with the entire page.</p>
//       </div>

//       <div className="content-box">
//         <h3>Content Box 2</h3>
//         <p>More content for demonstration purposes.</p>
//       </div>
//     </div>
//   );
// };

// export default ScreenReader;

// import React, { useState } from "react";
// import Loader from "./Loader";
// import Container from "./Container";
// import { img10 } from "../Assets/Product_images";

// import {
//   TransformWrapper,
//   TransformComponent,
//   useControls
// } from "react-zoom-pan-pinch";

// export const Controls = () => {
//   const { zoomIn, zoomOut, resetTransform } = useControls();

//   return (
//     <div className="tools">
//       <button onClick={() => zoomIn()}>+</button>
//       <button onClick={() => zoomOut()}>-</button>
//       <button onClick={() => resetTransform()}>x</button>
//     </div>
//   );
// };

// const ScreenReader = () => {
//   return (
//     <TransformWrapper
//       initialScale={1}
//       initialPositionX={200}
//       initialPositionY={100}
//     >
//       {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
//         <>
//           <Controls />
//           <TransformComponent>
//             <img src={img10} alt="test" />
//             <div>Example text</div>
//           </TransformComponent>
//         </>
//       )}
//     </TransformWrapper>
//   );
// };

// const ScreenReader = () => {
//   // const [cursor, setCursor] = useState("crosshair");

//   // const changeCursor = () => {
//   //   setCursor((prevState) => {
//   //     if (prevState === "crosshair") {
//   //       return "pointer";
//   //     }
//   //     return "crosshair";
//   //   });
//   // };

//   return (
//     // <div className="w-full flex justify-center h-[200vh] bg-slate-500">
//     //   <div className="App fixed right-72 bottom-72" style={{ cursor: cursor }}>
//     //     <h2>Click to change mouse cursor</h2>
//     //     <input
//     //       type="button"
//     //       value="Change cursor"
//     //       onClick={changeCursor}
//     //       style={{ cursor: cursor }}
//     //     />
//     //   </div>
//     // </div>
//     <Loader/>
//   );
// };

// export default ScreenReader;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removefavourite } from "../Redux/favouritelistslice/index";
// import { MdOutlineShoppingBag } from "react-icons/md";
// // import { BiSolidShoppingBags } from "react-icons/bi";
// import { BsFillTrash3Fill } from "react-icons/bs";
// // import { NavLink } from "react-router-dom";
// import { speakText } from "../Redux/accessibility";
// import { addToCart } from "../Redux/cartslice";
// import Navbar from "./Navbar";
// import { toast } from "react-toastify";


// function ScreenReader() {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.FavouriteList.items); // Adjust according to your state structure
//   const isTextSize = useSelector((state) => state.accessibility.isTextSize);
//   const isHighContrast = useSelector(
//     (state) => state.accessibility.isHighContrast
//   );
//   const isLineHeight = useSelector((state) => state.accessibility.isLineHeight);
//   const isTextSpace = useSelector((state) => state.accessibility.isTextSpace);

//   const handleSpeak = (text) => {
//     dispatch(speakText(text));
//   };

//   const handleRemoveFavourite = (id)=>{
//     dispatch(removefavourite(id));
//     toast.error("Remove Form the Wishlist", {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
    
//   }

//   const handleAddtoCart = (product)=>{
//     dispatch(addToCart(product));
//     console.log(product);
    
//     toast.success("Item Add", {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   }

//   // if (items.length === 0) {
//   //   return (
//   //     <>
//   //       <Navbar />

//   //       <div className="drawer-end fixed bottom-3 right-4 z-[120] ">
//   //         <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//   //         <div className="drawer-content ">
//   //           {/* View Cart Button */}
//   //           <label htmlFor="my-drawer-4" className="drawer-button">
//   //             <div
//   //               role="button"
//   //               className="btn bg-primary_alt hover:bg-primary pt-1 ml-2 mt-2"
//   //             >
//   //               <div className="indicator">
//   //                 <MdOutlineShoppingBag className="text-3xl text-secondary" />
//   //               </div>
//   //             </div>
//   //           </label>
//   //         </div>

//   //         {/* Page content here */}
//   //         <div className="drawer-side h-[100%] z-[100]">
//   //           <label
//   //             htmlFor="my-drawer-4"
//   //             aria-label="close sidebar"
//   //             className="drawer-overlay"
//   //           ></label>

//   //           <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-[100%]  z-[1001]">
//   //             <div className="overflow-auto pt-6 px-6 h-full ">
//   //               <div className="flex items-center gap-4 text-gray-800">
//   //                 <h3
//   //                   className="text-2xl font-bold flex-1"
//   //                   onMouseEnter={() => handleSpeak("Favourite List")}
//   //                 >
//   //                   Favourite List
//   //                 </h3>
//   //                 <label htmlFor="my-drawer-4">
//   //                   <svg
//   //                     xmlns="http://www.w3.org/2000/svg"
//   //                     className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
//   //                     viewBox="0 0 320.591 320.591"
//   //                   >
//   //                     <path
//   //                       d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//   //                       data-original="#000000"
//   //                     ></path>
//   //                     <path
//   //                       d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//   //                       data-original="#000000"
//   //                     ></path>
//   //                   </svg>
//   //                 </label>
//   //               </div>
//   //               <div className="flex flex-col justify-center items-center h-[90%]">
//   //                 <BiSolidShoppingBags className="text-9xl" />
//   //                 <h1 className="font-bold mt-3 text-2xl">
//   //                   Favourite List Is Empty
//   //                 </h1>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </>
//   //   );
//   // }

//   return (
//     <>
//       <Navbar />

//       <div className="drawer-end fixed bottom-3 right-4 z-40 ">
//         <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content ">
//           {/* View Cart Button */}

//           <label htmlFor="my-drawer-4" className="drawer-button">
//             <div
//               role="button"
//               className="btn bg-primary_alt hover:bg-primary pt-1 ml-2 mt-2"
//             >
//               <div className="indicator">
//                 <MdOutlineShoppingBag className="text-3xl text-secondary" />
//                 <span className="badge badge-sm indicator-item text-primary z-0">
//                   {items.length}
//                 </span>
//               </div>
//             </div>
//           </label>
//         </div>

//         {/* Page content here */}
//         <div className="drawer-side h-[100%] z-[150]">
//           <label
//             htmlFor="my-drawer-4"
//             aria-label="close sidebar"
//             className="drawer-overlay"
//           ></label>

//           <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-full z-[1001]">
//             <div className="overflow-auto p-6 h-full">
//               <div className="flex items-center gap-4 text-gray-800">
//                 <h3
//                   className={`text-2xl  flex-1 ${
//                     isHighContrast ? "font-extrabold" : "font-bold"
//                   } ${isTextSpace ? "tracking-widest " : ""}`}
//                   onMouseEnter={() => handleSpeak("Favourite List")}
//                 >
//                   Favourite List
//                 </h3>
//                 <label htmlFor="my-drawer-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
//                     viewBox="0 0 320.591 320.591"
//                   >
//                     <path
//                       d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                       data-original="#000000"
//                     ></path>
//                     <path
//                       d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                       data-original="#000000"
//                     ></path>
//                   </svg>
//                 </label>
//               </div>

//               {items.map((item) => {
//                 return (
//                   <div key={item.id}>
//                     <hr className="border-gray-300 my-3" />

//                     <div className="grid grid-cols-3 items-start gap-4">
//                       <div className="col-span-2 flex items-start gap-4">
//                         <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
//                           <img
//                             alt={item.artist}
//                             src={item.img}
//                             className="w-full h-full object-contain"
//                           />
//                         </div>

//                         <div className={`flex flex-col  `}>
//                           <h3
//                             className={` ${
//                               isTextSize ? "text-lg" : "text-base"
//                             } max-sm:text-sm ${
//                               isHighContrast ? "font-extrabold" : "font-bold"
//                             }  ${
//                               isTextSpace ? "tracking-widest " : ""
//                             } text-gray-800`}
//                             onMouseEnter={() => handleSpeak(item.artist)}
//                           >
//                             {item.artist}
//                           </h3>
//                           <p
//                             className={` ${
//                               isTextSize ? "text-sm" : "text-xs"
//                             } ${
//                               isHighContrast ? "font-bold" : "font-semibold"
//                             } ${isTextSpace ? "tracking-widest " : ""} ${
//                               isLineHeight ? "leading-loose" : ""
//                             } text-gray-500 mt-0.5`}
//                             onMouseEnter={() => handleSpeak(item.dimension)}
//                           >
//                             {item.dimension}
//                           </p>
//                           {/* Remove Button */}
//                           <button
//                             type="button"
//                             className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
//                             onClick={() => {
//                               handleRemoveFavourite({id : item.id})
//                             }}
//                             onMouseEnter={() => handleSpeak("remove")}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="w-4 fill-current inline"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
//                                 data-original="#000000"
//                               ></path>
//                               <path
//                                 d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
//                                 data-original="#000000"
//                               ></path>
//                             </svg>
//                             REMOVE
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white divide-y divide-gray-300 px-4">
//         {/*  */}
//         {items.map((item) => {
//           return (
//             <div className="grid md:grid-cols-5 items-center gap-4 py-4">
//               <div className="col-span-3 flex items-center gap-6 ">
//                 <div className="w-28 h-28 shrink-0">
//                   <img src={item.img} className="w-full h-full object-contain" alt={item.artist} />
//                 </div>

//                 <div>
//                   <h3 className="text-base md:text-lg font-bold text-gray-800 ">
//                     {item.artist}
//                   </h3>
//                   <h6 className="text-sm  text-gray-500 mt-1">{item.dimension}</h6>
//                   <BsFillTrash3Fill  className="mt-1 cursor-pointer text-xl"
//                   onClick={() => {
//                     handleRemoveFavourite({ id: item.id })
//                   }}/>
//                 </div>
//               </div>

//               <h4 className="text-base font-bold text-gray-800 md:text-lg">${item.price}</h4>
//               <div className="flex items-center col-span-2 md:col-span-1">
//                 <button
//                   type="button"
//                   className="btn bg-primary_alt hover:bg-primary text-secondary cursor-pointer  md:text-base shrink-0 ml-auto"
//                   onClick={()=> handleAddtoCart(item)}
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default ScreenReader;


