// // import { useSelector } from "react-redux";

// // const useSpeak = () => {
// //   const speechEnabled = useSelector((state) => state.accessibility.isSpeechEnabled);
// //   alert("useSpeak")
// //   const speakText = (text)=>{
// //   alert(speechEnabled)
// //   alert(text)

// //     if (speechEnabled && text) {

// //       const utterance = new SpeechSynthesisUtterance(text);
// //       window.speechSynthesis.speak(utterance);
// //     }

// //   }
// //   return { speakText };
// // };

// // export default useSpeak;


// import { useSelector } from "react-redux";
// import { useState } from "react";

// const useSpeak = () => {
//   // Redux selector to check if speech synthesis is enabled
//   const speechEnabled = useSelector((state) => state.accessibility.isSpeechEnabled);

//   // State to manage whether speaking is in progress
//   const [speaking, setSpeaking] = useState(false);

//   // Function to speak text
//   const speakText = (text) => {
//     if (speechEnabled && text) {
//       // Stop any ongoing speech before starting a new one
//       window.speechSynthesis.cancel();
//       setSpeaking(false);

//       const utterance = new SpeechSynthesisUtterance(text);

//       // Set speaking to true when the utterance starts
//       utterance.onstart = () => {
//         setSpeaking(true);
//       };

//       // Set speaking to false when the utterance ends
//       utterance.onend = () => {
//         setSpeaking(false);
//       };

//       window.speechSynthesis.speak(utterance);
//     }
//   };

//   // Function to stop/cancel any ongoing speech
//   const stopSpeech = () => {
//     window.speechSynthesis.cancel();
//     setSpeaking(false);
//   };

//   return {
//     speakText,
//     stopSpeech,
//     speaking,
//   };
// };

// export default useSpeak;
