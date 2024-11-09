import { createSlice } from "@reduxjs/toolkit";

const FavouriteListSlice = createSlice({
  name: "FavouriteSlice",
  initialState: {
    items: JSON.parse(localStorage.getItem("FavouriteItems")) || [],
  },
  reducers: {
    addfavourite: (state, action) => {
      console.log(action.payload);

      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item exists, remove it and set `isFavourite` to false
        state.items = state.items.filter(item => item.id !== action.payload.id);
        
      } else {
        state.items.push(action.payload);
      }

      // Update the items in localStorage
      localStorage.setItem("FavouriteItems", JSON.stringify(state.items));
    },
    removefavourite: (state, action) => {
      console.log(action.payload);
      
      // Remove the item and set `isFavourite` to false
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem("FavouriteItems", JSON.stringify(state.items));
    }
  }
});

export const { addfavourite, removefavourite } = FavouriteListSlice.actions;
export default FavouriteListSlice.reducer;
