import { createSlice } from "@reduxjs/toolkit";

const accessibilitySlice = createSlice({
  name: "Accessibility",
  initialState: {
    isSpeechEnabled: localStorage.getItem("Voice") || false,
    isHighContrast : localStorage.getItem("HighContrast") || false,
    zoomLevel : localStorage.getItem("Zoom") || 1,
  },

  reducers: {
    toggleSpeak: (state) => {
      state.isSpeechEnabled = !state.isSpeechEnabled;
      localStorage.setItem("Voice", state.isSpeechEnabled);
    },

    speakText: (state, actions) => {
      //   alert(state.isSpeechEnabled);
      //   alert(actions.payload);

      if (state.isSpeechEnabled && actions.payload) {
        // Stop any ongoing speech before starting a new one
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(actions.payload);

        window.speechSynthesis.speak(utterance);
      }
    },

    stopSpeech: () => {
      window.speechSynthesis.cancel();
    },

    // Highcontrast 

    toggleHighContrast: (state)=>{
      state.isHighContrast = !state.isHighContrast;
      localStorage.setItem("HighContrast" , state.isHighContrast);
    },

    // Zoom IN And OUT

    zoomIn : (state)=>{
      state.zoomLevel = Math.min(state.zoomLevel + 0.03, 1.09); // Max zoom: 109%
      localStorage.setItem("Zoom" , state.zoomLevel);
    },

    zoomOut : (state) => {
      state.zoomLevel = Math.max(state.zoomLevel - 0.03, 0.94); // Max zoom: 80%
      localStorage.setItem("Zoom" , state.zoomLevel);

    }
  },
});

export const { toggleSpeak, speakText, stopSpeech ,toggleHighContrast, zoomIn , zoomOut } =  accessibilitySlice.actions;
export default accessibilitySlice.reducer;
