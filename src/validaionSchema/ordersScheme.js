import * as Yup from "yup";

export const orderSchema = Yup.object({
   customerName:Yup.string().required("Customer Name is required"),
   date:Yup.string().required("Date is required"),
   status:Yup.string().required("Status is required"),
   totalAmount:Yup.string().required("Total Amount is required")
})