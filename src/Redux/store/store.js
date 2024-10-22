import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "../cartslice/index"
import accessibilitySlice from "../accessibility/index";

const store = configureStore({
    reducer: {
        cart : cartSlice,
        accessibility: accessibilitySlice,
               
    }
})

export default store;