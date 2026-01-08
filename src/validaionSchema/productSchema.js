import * as Yup from "yup";

export const productScehma=Yup.object({
    productName:Yup.string().required("Product Name is required"),
    description:Yup.string().required("Description is required"),
    status:Yup.string().required("Status is required")

})
