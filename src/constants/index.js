import { Facebook, Instagram,  Twitter } from "lucide-react"

   export  const NAV_ITEMS = [
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
            id:1,
            Icon:Instagram,
            label:"Instagram"
        },
        {
            id:2,
            Icon:Facebook,
            label:"Facebook"
        },
        {
            id:3,
            Icon:Twitter,
            label:"Twitter"
        }
    ]


    export const ORDERS_DATA=[
        {
            id:1,
            orderId:"ORD001",
            customerName:"John Doe",
            date:"2024-06-01",
            status:"Delivered",
            totalAmount:250.00
        },
        {
            id:2,
            orderId:"ORD002",
            customerName:"Jane Smith",
            date:"2024-06-02",
            status:"In Transit",
            totalAmount:150.00
        },
        {
            id:3,
            orderId:"ORD003",
            customerName:"Mike Johnson",
            date:"2024-06-03",
            status:"Pending",
            totalAmount:300.00
        }
    ]

    export const PRODUCTS_DATA=[
        {
            id:1,
            productId:"PROD001",
            productName:"Product A",
            category:"Category 1",
            price:50.00,
            stock:100
        },
        {
            id:2,
            productId:"PROD002",
            productName:"Product B",
            category:"Category 2",
            price:75.00,
            stock:200
        },
        {
            id:3,
            productId:"PROD003",
            productName:"Product C",
            category:"Category 1",
            price:100.00,
            stock:0
        }
    ]