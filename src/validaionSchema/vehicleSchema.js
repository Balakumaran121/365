import * as Yup from 'yup';

export const vehicleSchema = Yup.object({
    vehicleName: Yup.string().required("Vehicle Name is required"),
    vehicleCapacity: Yup.string().required("Vehicle Capacity is required"),
    vehicleType: Yup.string().required("Vehicle Type is required")
})