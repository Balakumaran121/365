import { Delete, Edit, SquarePen, Trash } from 'lucide-react';
import DataTable from '../componenst/DataTable'
import { ORDERS_DATA } from '../constants'
import toast from 'react-hot-toast';
import { useState } from 'react';

const Orders = () => {
  const [ordersData,setOrdersData]=useState(ORDERS_DATA)
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
    },
    {
      header:"Actions",
      accessorKey:"action",
      cell:({row})=>{
        const value = row.original
        return (
          <div className='flex gap-3 cursor-pointer'>
            
            <SquarePen size={20}  onClick={()=>{console.log("edit",value)}} />
            <Trash size={20} onClick={()=>{console.log('delete',value)}}/>
          </div>
        )
      }
    }
  ]

  const handleAddOrders=()=>{
      const isAdd = true;
      if(isAdd){
        const newData = {id:ordersData.length+1,orderId:`ORD${ordersData.length+1}`,customerName:"Dhruv",status:"Pending",totaltAmount:'454'}
        setOrdersData((prev)=>[...prev,newData])
      }else{
        toast.error("Orders Can't Add!")
      }
  }
  return (
    <div>
     <DataTable columns={columns} data={ORDERS_DATA} isPagination={true} entries={[10,25,50,100]} handleAdd={handleAddOrders}/>
    </div>
  )
}

export default Orders
