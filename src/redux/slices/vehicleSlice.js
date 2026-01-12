import { createSlice } from "@reduxjs/toolkit";

const vehicleSlice = createSlice({
    name: "vehicleSlice",
    initialState: {
        vehicleData: []
    },
    reducers: {
        setVehicleData: (state, action) => {
            const vehId = state.vehicleData.length + 1;
            state.vehicleData.push({
                ...action.payload,
                id: vehId,
                vehicleId: `VH-${vehId}`
            })
        },
        deleteVehiclesData:(state,action)=>{
            state.vehicleData= state.vehicleData.filter((val)=>val.id!==action.payload);
        }
    }
});
export const { setVehicleData,deleteVehiclesData } = vehicleSlice.actions;
export default vehicleSlice.reducer;