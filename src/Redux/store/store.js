import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "../cartslice/index"
import accessibilitySlice from "../accessibility/index";
import FavouriteListSlice from "../favouritelistslice/index";

const store = configureStore({
    reducer: {
        cart : cartSlice,
        accessibility: accessibilitySlice,
        FavouriteList : FavouriteListSlice,      
    }
})

export default store;