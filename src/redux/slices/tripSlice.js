import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
    name:"tripSlice",
    initialState:{
        tripsData:[]
    },
    reducers:{
        setTripsData:(state,action)=>{
            const triID =state.tripsData.length+1;
            state.tripsData.push({
                ...action.payload,
                id:triID,
                tripId:`TR-${triID}`
            })
        },
        deleteTripsData:(state,action)=>{
            state.tripsData=state.tripsData.filter((val)=>val.id!==action.payload)
        }
    }
})

export const {setTripsData,deleteTripsData}=tripSlice.actions
export default tripSlice.reducer