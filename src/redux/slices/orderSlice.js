import { createSlice } from "@reduxjs/toolkit";



const orderSlice = createSlice({
    name:"orderSlice",
    initialState: {
        ordersData: [],
        openAddForm:false
    },
    reducers: {
        setOrdersData: (state, action) => {
            state.ordersData = action.payload;
        },
        setOpenAddForm:(state)=>{
            state.openAddForm=!state?.openAddForm
        }
    }
})

export const { setOrdersData ,setOpenAddForm} = orderSlice.actions;
export default orderSlice.reducer;