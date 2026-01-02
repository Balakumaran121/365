import DataTable from '../componenst/DataTable'
import { ORDERS_DATA } from '../constants'

const Orders = () => {
  const columns =[
    {
      header:"Order ID",
      accessorKey:"orderId"
    },
    {
      header:"Customer Name",
      accessorKey:"customerName"
    },
    {
      header:"Date",
      accessorKey:"date"
    },
    {
      header:"Status",
      accessorKey:"status",
      cell:({getValue})=>{
        const value = getValue();
        return(
        <span className={`px-2 py-1 rounded-full text-white font-semibold ${value==="Delivered"?"bg-green-500":value==="Pending"?"bg-yellow-500":"bg-red-500"}`}>
          {value}
        </span>
      )
      }
    },
    {
      header:"Total Amount",
      accessorKey:"totalAmount",
      cell:({getValue})=>{
        const value = getValue();
        return `$${value.toFixed(2)}`;
      }
    }
  ]
  return (
    <div>
     <DataTable columns={columns} data={ORDERS_DATA} isPagination={true} entries={[10,25,50,100]}/>
    </div>
  )
}

export default Orders
