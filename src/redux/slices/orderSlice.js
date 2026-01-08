import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
    name: "orderSlice",
    initialState: {
        ordersData: [],
        openAddForm: false
    },
    reducers: {
        setOrdersData: (state, action) => {
            const nextId = state.ordersData.length + 1;

            state.ordersData.push({
                ...action.payload,
                id: nextId,
                orderId: `ORD${nextId}`
            })
        },
        setOpenAddForm: (state) => {
            state.openAddForm = !state?.openAddForm
        },
        deleteOrdersData:(state,action)=>{
            state.ordersData=state.ordersData.filter((val)=>val.id!==action.payload)
        }
    }
})

export const { setOrdersData, setOpenAddForm,deleteOrdersData } = orderSlice.actions;
export default orderSlice.reducer;