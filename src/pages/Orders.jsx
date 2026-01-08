import { SquarePen, Trash, X } from 'lucide-react';
import DataTable from '../componenst/DataTable'
import { ORDER_FIELDS } from '../constants'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenAddForm, setOrdersData } from '../redux/slices/orderSlice';
import CustomInput from '../componenst/CustomInput';
import { useFormik } from 'formik';
import { orderSchema } from '../validaionSchema/ordersScheme';
const initialValues = ORDER_FIELDS.reduce((acc, field) => {
  acc[field.name] = ""
  return acc;
}, {})
const Orders = () => {
  const dispatch = useDispatch()
  const { ordersData, openAddForm } = useSelector((state) => state.orders)
  const handleAdd = (values) => {
    dispatch(setOrdersData(values))
    dispatch(setOpenAddForm())
  }
  const formik = useFormik({
    initialValues,
    validationSchema: orderSchema,
    onSubmit: (values) => {
      handleAdd(values)
      formik.resetForm()
    }
  })

  const orderColumns = [
    {
      header: "Order ID",
      accessorKey: "orderId"
    },
    {
      header: "Customer Name",
      accessorKey: "customerName"
    },
    {
      header: "Date",
      accessorKey: "date"
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <span className={`px-2 py-1 rounded-full text-white font-semibold ${value === "Delivered" ? "bg-green-500" : value === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>
            {value}
          </span>
        )
      }
    },
    {
      header: "Total Amount",
      accessorKey: "totalAmount",
      cell: ({ getValue }) => {
        const value = Number(getValue());
        return `$${value.toFixed(2)}`;
      }
    },
    {
      header: "Actions",
      accessorKey: "action",
      cell: ({ row }) => {
        const value = row.original
        return (
          <div className='flex gap-3 cursor-pointer'>

            <SquarePen size={20} onClick={() => { console.log("edit", value) }} />
            <Trash size={20} onClick={() => { console.log('delete', value) }} />
          </div>
        )
      }
    }
  ]


  const handleAddOrders = () => {
    const isAdd = true;
    if (isAdd) {
      dispatch(setOpenAddForm())
    } else {
      toast.error("Orders Can't Add!")
    }
  }
  return (
    <div>
      <DataTable columns={orderColumns} data={ordersData} isPagination={true} entries={[10, 25, 50, 100]} handleAdd={handleAddOrders} />

      <div className={`fixed top-0 right-0 h-full w-100 bg-white z-80 shadow-lg transform transition-transform duration-300 ease-in-out ${openAddForm ? "translate-x-0" : "translate-x-full "} `}>
        <form onSubmit={formik.handleSubmit} className='space-y-4'>

          <div className='flex justify-between p-4' onClick={() => { dispatch(setOpenAddForm()) }}>
            <h1 className='text-lg font-semibold  hover:text-gray-500'>Add Orders</h1>
            <X className='hover:text-red-500 cursor-pointer' />
          </div>
          {
            ORDER_FIELDS.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                options={field.options}
                formik={formik}

              />
            ))
          }

          <button className='p-3 mx-14 bg-green-500 rounded w-[70%] cursor-pointer ' type='submit'>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Orders
