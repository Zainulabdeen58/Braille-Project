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


import React from "react";
import { img10 } from "../Assets/Product_images";

import {
  TransformWrapper,
  TransformComponent,
  useControls
} from "react-zoom-pan-pinch";

export const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

const ScreenReader = () => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <Controls />
          <TransformComponent>
            <img src={img10} alt="test" />
            <div>Example text</div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default ScreenReader;