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
        }
    }
});
export const { setVehicleData } = vehicleSlice.actions;
export default vehicleSlice.reducer;