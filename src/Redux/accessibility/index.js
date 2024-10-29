import { createSlice } from "@reduxjs/toolkit";

const accessibilitySlice = createSlice({
  name: "Accessibility",
  initialState: {
    isSpeechEnabled: JSON.parse(localStorage.getItem("Voice")) || false, // Parse to boolean
    isHighContrast: JSON.parse(localStorage.getItem("HighContrast")) || false, // Parse to boolean
    isZoomIn: JSON.parse(localStorage.getItem("Zoom")) || false , // Ensure zoomLevel is a number
    isTextSize: JSON.parse(localStorage.getItem("TextSize")) || false, // Parse to boolean
    isSaturation: JSON.parse(localStorage.getItem("Saturation")) || false , // Default is 100%
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

    // High contrast

    toggleHighContrast: (state) => {
      state.isHighContrast = !state.isHighContrast;
      localStorage.setItem("HighContrast", state.isHighContrast);
    },

    // Zoom IN And OUT

    toggleZoomIn: (state) => {
      state.isZoomIn = !state.isZoomIn;
      localStorage.setItem("Zoom", state.isZoomIn);
    },

    // Text Size 
    toggleTextSize: (state) => {
      state.isTextSize = !state.isTextSize;
      localStorage.setItem("TextSize", state.isTextSize);
    },

    // Saturation
    toggleSaturation: (state) => {
      console.log("increaseSaturation");
      state.isSaturation = !state.isSaturation;
      localStorage.setItem("Saturation", state.isSaturation);
    },
  
    // Cursor Size
    toggleCursorSize: (state) => {
      state.isCursorSize = !state.isCursorSize;
      localStorage.setItem("CursorSize", state.isCursorSize);
    },
  
    // Font Style
    toggleFontStyle: (state) => {
      state.isFontStyle = !state.isFontStyle;
      localStorage.setItem("FontStyle", state.isFontStyle);
    },

    // Line Height
    toggleLineHeight: (state) => {
      state.isLineHeight = !state.isLineHeight;
      localStorage.setItem("LineHeight", state.isLineHeight);
    },

    // Text Spacing
    toggleTextSpacing : (state) => {
      state.isTextSpace = !state.isTextSpace;
      localStorage.setItem("TextSpace", state.isTextSpace);
    },
    
    // Link High Light
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
  toggleZoomIn,
  toggleTextSize,
  toggleCursorSize,
  toggleFontStyle,
  toggleLineHeight,
  toggleTextSpacing,
  toggleLinkHighLight,
  toggleSaturation,
} = accessibilitySlice.actions;
export default accessibilitySlice.reducer;
