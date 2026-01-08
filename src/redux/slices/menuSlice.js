import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name:"menuSlice",
    initialState:{
        openForm:false
    },
    reducers:{
        setOpenAdd:(state,action)=>{
            state.openForm=action.payload
        }
    }
})


export const {setOpenAdd}=menuSlice.actions
export default menuSlice.reducer;