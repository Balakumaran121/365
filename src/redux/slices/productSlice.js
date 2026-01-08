import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        productsData: []
    },
    reducers: {
        setProductsData: (state, action) => {
            state.productsData = [...state.productsData, action.payload]
        }
    }
})

export const { setProductsData } = productSlice.actions
export default productSlice.reducer