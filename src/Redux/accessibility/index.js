import { createSlice } from "@reduxjs/toolkit";

const accessibilitySlice = createSlice({
  name: "Accessibility",
  initialState: {
    isSpeechEnabled: JSON.parse(localStorage.getItem("Voice")) || false, // Parse to boolean
    isHighContrast: JSON.parse(localStorage.getItem("HighContrast")) || false, // Parse to boolean
    zoomLevel: parseFloat(localStorage.getItem("Zoom")) || 1, // Ensure zoomLevel is a number
    isTextSize: JSON.parse(localStorage.getItem("TextSize")) || false, // Parse to boolean
    // saturationLevel: 1, // Default is 100%
    isCursorSize: JSON.parse(localStorage.getItem("CursorSize")) || false,
    isFontStyle : JSON.parse(localStorage.getItem("FontStyle")) || false,
  },

  reducers: {
    toggleSpeak: (state) => {
      state.isSpeechEnabled = !state.isSpeechEnabled;
      localStorage.setItem("Voice", state.isSpeechEnabled);
    },

    speakText: (state, actions) => {
        // alert(state.isSpeechEnabled);
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

    },

    toggleTextSize: (state)=>{
      state.isTextSize = !state.isTextSize;
      localStorage.setItem("TextSize" , state.isTextSize);
    },


    increaseSaturation: (state) => {
      state.saturationLevel = Math.min(state.saturationLevel + 0.2, 2); // Max 200%
    },
    decreaseSaturation: (state) => {
      state.saturationLevel = Math.max(state.saturationLevel - 0.2, 0); // Min 0%
    },

    toggleCursorSize: (state) => {
      state.isCursorSize = !state.isCursorSize;
      localStorage.setItem("CursorSize", state.isCursorSize);
    },

    toggleFontStyle: (state) => {
      state.isFontStyle = !state.isFontStyle;
      localStorage.setItem("FontStyle", state.isFontStyle);
    }
  },
});

export const { toggleSpeak, speakText, stopSpeech ,toggleHighContrast, zoomIn , zoomOut, toggleTextSize, toggleFontStyle, increaseSaturation, decreaseSaturation,  toggleCursorSize } =  accessibilitySlice.actions;
export default accessibilitySlice.reducer;
