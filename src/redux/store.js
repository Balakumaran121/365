import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from './slices/orderSlice'

const store = configureStore({
    reducer:{
        orders:OrderSlice,
    }
})
export default store