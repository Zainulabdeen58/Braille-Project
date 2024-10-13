// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleSpeak } from "../Redux/cart/accessibility";

// const MyComponent = () => {
//   const dispatch = useDispatch();
//   const isSpeechEnabled = useSelector((state)=> state.accessibility.isSpeechEnabled);
  
//   const [text, setText] = useState(""); // State to hold current text input

//   const handleSpeak = (newText) => {
//     speakText(newText); // Automatically stops any previous speech and speaks the new text
//   };

//   return (
//     <div>
//       <label className="inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           onClick={() => dispatch(toggleSpeak())}
//           value={isSpeechEnabled}
//           className="sr-only peer"
//         />
//         <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//         <span className="ms-3 text-sm font-medium text-gray-900 ">
//           {isSpeechEnabled ? "Voice ON" : "Voice OFF"}
//         </span>
//       </label>
//       <textarea
//         value={text}
//         onChange={(event) => setText(event.target.value)}
//         placeholder="Type something"
//       />
//       <div>
//         <button onClick={() => handleSpeak(text)} disabled={speaking} className="btn">
//           {speaking ? "Speaking..." : "Speak"}
//         </button>
//         <button onClick={stopSpeech} disabled={!speaking} className="btn">
//           Stop
//         </button>
//       </div>

//       {/* Examples of clickable text to trigger speech */}
//       <div>
//         <p onClick={() => handleSpeak("This is the first text to speak")}>
//           Speak this text
//         </p>
//         <p onClick={() => handleSpeak("Here is another text to be spoken")}>
//           Speak another text
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MyComponent;
