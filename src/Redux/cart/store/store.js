import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "../cartslice/index"

const store = configureStore({
    reducer: {
        cart : cartSlice,
    }
})

export default store;