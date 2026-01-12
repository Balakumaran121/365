import * as Yup from 'yup'

export const driverScehma = Yup.object({
    driverName:Yup.string().required("Driver Name is required"),
    status:Yup.string().required("Status is required")
})