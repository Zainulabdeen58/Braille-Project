import { createSlice } from "@reduxjs/toolkit";

const accessibilitySlice = createSlice({
  name: "Accessibility",
  initialState: {
    isSpeechEnabled: false,
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

  },
});

export const { toggleSpeak, speakText, stopSpeech } = accessibilitySlice.actions;
export default accessibilitySlice.reducer;
