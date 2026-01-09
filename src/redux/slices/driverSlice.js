import { createSlice } from "@reduxjs/toolkit";

const driverSlice = createSlice({
    name:'driverSlice',
    initialState:{
        driversData:[],
    },
    reducers:{
        setDriverData:(state,action)=>{
            const driID = state.driversData.length+1;
            state.driversData.push({
                ...action.payload,
                id:driID,
                driverId:`DR-${driID}`
            })
        },
        deleteDriversData:(state,action)=>{
           state.driversData= state.driversData.filter((val)=>val.id!==action.payload)
        }
    }
})

export const {setDriverData,deleteDriversData}=driverSlice.actions

export default driverSlice.reducer