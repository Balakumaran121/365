import * as Yup from 'yup';

export const tripScehma = Yup.object({
    tripName:Yup.string().required("Trip Name is required"),
    vehicleNumber:Yup.string().required("Vehicle is required"),
    productName:Yup.string().required("Product Name is required")
})