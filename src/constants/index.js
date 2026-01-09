import { Facebook, Instagram, Twitter } from "lucide-react"

export const NAV_ITEMS = [
    {
        id: 1,
        path: "/orders",
        title: "Orders",
    },
    {
        id: 2,
        path: "/products",
        title: "Products",
    },
    {
        id: 3,
        path: "/driver",
        title: "Driver",
    },
    {
        id: 4,
        path: "/vehicle",
        title: "Vehicle",
    },
    {
        id: 5,
        path: "/trips",
        title: "Trips",
    },
]
export const ICONS = [
    {
        id: 1,
        Icon: Instagram,
        label: "Instagram"
    },
    {
        id: 2,
        Icon: Facebook,
        label: "Facebook"
    },
    {
        id: 3,
        Icon: Twitter,
        label: "Twitter"
    }
]


export const ORDER_FIELDS=[
    {
        id:1,
        label:"Customer Name",
        name:"customerName",
        type:"text"
    },
    {
        id:2,
        label:"Date",
        name:"date",
        type:"date"
    },
    {
        id:3,
        label:"Status",
        type:'select',
        name:"status",
        options:["Pending","Completed","In-progress"]
    },
    {
        id:4,
        label:'Total Amount',
        type:"text",
        name:'totalAmount'
    }
]


export const PRODUCT_FIELDS =[
    {
        id:1,
        label:"Product Name",
        name:"productName",
        type:"text"
    },
    {
        id:2,
        label:"Description",
        name:"description",
        type:'text'
    },
    {
        id:3,
        label:"Status",
        name:'status',
        type:'select',
        options:["Available","Not Available"]
    },
    {
        id:4,
        label:"In Stock",
        name:"stock",
        type:"text"
    },
    {
        id:5,
        label:"Price",
        name:'price',
        type:"text"
    }
]


export const DRIVER_FIELDS = [
    {
        id:1,
        name:"driverName",
        label:"Driver Name",
        type:"text"
    },
    {
        id:2,
        name:"status",
        label:"Status",
        type:"select",
        options:["Active","In-active"],
    },
    {
        id:3,
        label:"Driving License Number",
        type:"text",
        name:"drivingLicense"
    }
]