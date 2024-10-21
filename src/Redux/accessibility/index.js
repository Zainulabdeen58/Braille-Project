import { createSlice } from "@reduxjs/toolkit";

const accessibilitySlice = createSlice({
  name: "Accessibility",
  initialState: {
    isSpeechEnabled: false,
    isHighContrast : false,
  },

  reducers: {
    toggleSpeak: (state) => {
      state.isSpeechEnabled = !state.isSpeechEnabled;
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
    }
  },
});

export const { toggleSpeak, speakText, stopSpeech ,toggleHighContrast } =  accessibilitySlice.actions;
export default accessibilitySlice.reducer;
