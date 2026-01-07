import {  SquarePen, Trash, X } from 'lucide-react';
import DataTable from '../componenst/DataTable'
import { ORDERS_DATA } from '../constants'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenAddForm } from '../redux/slices/orderSlice';
const Orders = () => {
  const dispatch = useDispatch()
  const {ordersData,openAddForm}=useSelector((state)=>state.orders)
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
        dispatch(setOpenAddForm())
      }else{
        toast.error("Orders Can't Add!")
      }
  }
  return (
    <div>
     <DataTable columns={columns} data={ordersData} isPagination={true} entries={[10,25,50,100]} handleAdd={handleAddOrders}/>
     
        <div className={`fixed top-0 right-0 h-full w-100 bg-white z-80 shadow-lg transform transition-transform duration-300 ease-in-out ${openAddForm?"translate-x-0":"translate-x-full "} `}>
        <div className='flex justify-between p-4' onClick={()=>{dispatch(setOpenAddForm())}}>
          <h1 className='text-lg font-semibold  hover:text-gray-500'>Add Orders</h1>
          <X className='hover:text-red-500 cursor-pointer'/>
          </div>
          <div className='p-3 flex flex-col gap-5'>
            <div className='flex flex-col gap-2 '>
              <label htmlFor="Customer Name" className='text-lg font-semibold'>Customer Name</label>
              <input type="text" className='border border-black p-2 rounded-lg' />
            </div>
             <div className='flex flex-col gap-2 '>
              <label htmlFor="Date" className='text-lg font-semibold'>Date</label>
              <input type="text" className='border border-black p-2 rounded-lg' />
            </div>
             <div className='flex flex-col gap-2 my-1'>
              <label htmlFor="Status" className='text-lg font-semibold'>Status</label>
              <input type="text" className='border border-black p-2 rounded-lg' />
            </div>
             <div className='flex flex-col gap-2 my-1'>
              <label htmlFor="Total Amount" className='text-lg font-semibold'>Total Amount</label>
              <input type="text" className='border border-black p-2 rounded-lg' />
            </div>
          </div>
          <div className='p-3 w-full flex flex-col h-1/2 justify-end'>
            <button className='p-3 bg-green-500 rounded w-full '>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default Orders
