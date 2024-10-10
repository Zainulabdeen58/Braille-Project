import { createSlice } from "@reduxjs/toolkit";

const highContrastSlice = createSlice({
    name : 'highContrast',
    initialState : {
        isHighContrast: false,
    },
      
      reducers: {
        toggleHighContrast(state) {
          state.isHighContrast = !state.isHighContrast;
        },
    }
})

export const { toggleHighContrast } = highContrastSlice.actions;
export default highContrastSlice.reducer;