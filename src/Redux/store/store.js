import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "../cart/cartslice/index"
import highcontrastSlice from "../highcontrast/highcontrastSlice/index"

const store = configureStore({
    reducer: {
        cart : cartSlice,
        highcontrast : highcontrastSlice,
    }
})

export default store;