import { createSlice } from "@reduxjs/toolkit";

const accessibilitySlice = createSlice({
  name: "Accessibility",
  initialState: {
    isSpeechEnabled: JSON.parse(localStorage.getItem("Voice")) || false, // Parse to boolean
    isHighContrast: JSON.parse(localStorage.getItem("HighContrast")) || false, // Parse to boolean
    zoomLevel: parseFloat(localStorage.getItem("Zoom")) || 1, // Ensure zoomLevel is a number
    isTextSize: JSON.parse(localStorage.getItem("TextSize")) || false, // Parse to boolean
    isSaturationLevel: false, // Default is 100%
    isCursorSize: JSON.parse(localStorage.getItem("CursorSize")) || false,
    isFontStyle: JSON.parse(localStorage.getItem("FontStyle")) || false,
    isLineHeight: JSON.parse(localStorage.getItem("LineHeight")) || false,
    isTextSpace: JSON.parse(localStorage.getItem("TextSpace")) || false,
    isLinkHighLight: JSON.parse(localStorage.getItem("LinkHighLight")) || false,
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

    toggleHighContrast: (state) => {
      state.isHighContrast = !state.isHighContrast;
      localStorage.setItem("HighContrast", state.isHighContrast);
    },

    // Zoom IN And OUT

    zoomIn: (state) => {
      state.zoomLevel = Math.min(state.zoomLevel + 0.03, 1.09); // Max zoom: 109%
      localStorage.setItem("Zoom", state.zoomLevel);
    },

    zoomOut: (state) => {
      state.zoomLevel = Math.max(state.zoomLevel - 0.03, 0.94); // Max zoom: 80%
      localStorage.setItem("Zoom", state.zoomLevel);
    },

    toggleTextSize: (state) => {
      state.isTextSize = !state.isTextSize;
      localStorage.setItem("TextSize", state.isTextSize);
    },

    toggleSaturation: (state) => {
      console.log("increaseSaturation");
      state.isSaturationLevel = !state.isSaturationLevel;
      // state.saturationLevel = Math.min(state.saturationLevel + 0.2, 2); // Max 200%
    },
    decreaseSaturation: (state) => {
      console.log("decreaseSaturation");
      
      // state.saturationLevel = Math.max(state.saturationLevel - 0.2, 0); // Min 0%
    },

    toggleCursorSize: (state) => {
      state.isCursorSize = !state.isCursorSize;
      localStorage.setItem("CursorSize", state.isCursorSize);
    },

    toggleFontStyle: (state) => {
      state.isFontStyle = !state.isFontStyle;
      localStorage.setItem("FontStyle", state.isFontStyle);
    },

    toggleLineHeight: (state) => {
      state.isLineHeight = !state.isLineHeight;
      localStorage.setItem("LineHeight", state.isLineHeight);
    },

    toggleTextSpacing : (state) => {
      state.isTextSpace = !state.isTextSpace;
      localStorage.setItem("TextSpace", state.isTextSpace);
    },
    
    toggleLinkHighLight : (state) => {
      state.isLinkHighLight = !state.isLinkHighLight;
      localStorage.setItem("LinkHighLight", state.isLinkHighLight);
    },

  },
});

export const {
  toggleSpeak,
  speakText,
  stopSpeech,
  toggleHighContrast,
  zoomIn,
  zoomOut,
  toggleTextSize,
  toggleCursorSize,
  toggleFontStyle,
  toggleLineHeight,
  toggleTextSpacing,
  toggleLinkHighLight,
  toggleSaturation
  // increaseSaturation,
  // decreaseSaturation,
} = accessibilitySlice.actions;
export default accessibilitySlice.reducer;
