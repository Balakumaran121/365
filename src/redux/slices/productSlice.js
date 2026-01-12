import { createSlice } from "@reduxjs/toolkit";
import { getLastProductNumber } from "../../utils";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        productsData: []
    },
    reducers: {
        setProductsData: (state, action) => {
            const lastNumber = getLastProductNumber(state.productsData);
            const nextNumber = lastNumber+1;
            state.productsData.push({
                ...action.payload,
                id:`PR-${String(nextNumber).padStart(2,"0")}`,
            })

        },
        deleteProducts:(state,action)=>{
            state.productsData=state.productsData.filter((val)=>val.id!==action.payload)
        },
        addBulkProducts:(state,action)=>{
            state.productsData.push(...action.payload)
        }
    }
})

export const { setProductsData,deleteProducts,addBulkProducts } = productSlice.actions
export default productSlice.reducer