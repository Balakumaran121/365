import { SquarePen, Trash } from 'lucide-react';
import DataTable from '../componenst/DataTable'
import { ORDER_FIELDS } from '../constants'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenAddForm, setOrdersData ,deleteOrdersData} from '../redux/slices/orderSlice';
import { useFormik } from 'formik';
import { orderSchema } from '../validaionSchema/ordersScheme';
import CustomForm from '../componenst/CustomForm';
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
            <Trash size={20} onClick={() => {dispatch(deleteOrdersData(value.id)) }} />
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
<CustomForm FIELDS={ORDER_FIELDS} formik={formik} state={openAddForm} setter={()=>{dispatch(setOpenAddForm())}}/>
    </div>
  )
}

export default Orders
