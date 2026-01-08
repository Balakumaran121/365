import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        productsData: []
    },
    reducers: {
        setProductsData: (state, action) => {
            const proId = state.productsData.length + 1;
            state.productsData.push({
                ...action.payload,
                id:proId,
                productId:`PRO${proId}`
            })

        },
        deleteProducts:(state,action)=>{
            state.productsData=state.productsData.filter((val)=>val.id!==action.payload)
        }
    }
})

export const { setProductsData,deleteProducts } = productSlice.actions
export default productSlice.reducer