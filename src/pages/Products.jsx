import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../componenst/DataTable'
import { setOpenAdd } from '../redux/slices/menuSlice';
import toast from 'react-hot-toast';
import CustomForm from '../componenst/CustomForm';
import { PRODUCT_FIELDS } from '../constants';
import { useFormik } from 'formik';
import { productScehma } from '../validaionSchema/productSchema';
import { deleteProducts, setProductsData } from '../redux/slices/productSlice';
import { SquarePen, Trash } from 'lucide-react';


const initialValues = PRODUCT_FIELDS.reduce((acc,field)=>{
  acc[field.name]=""
  return acc;
},{})
const Products = () => {
  const dispatch = useDispatch()
  const {openForm}=useSelector((state)=>state.menu)
  const {productsData} = useSelector((state)=>state.products)
  const handleProducts = ()=>{
   const isAdd = true
   if(isAdd){
    dispatch(setOpenAdd(true))
   }else{
    toast.error("Can't Add Product")
   }
  }
  const columns = [
    {
      header: "Product ID",
      accessorKey: "productId"
    },
    {
      header: "Product Name",
      accessorKey: 'productName'
    },
    {
      header: "Price",
      accessorKey: 'price'
    },
    {
      header:"Status",
      accessorKey:"status",
      cell:({getValue})=>{
        const value = getValue();
        return (
          <div className={`w-fit rounded-full px-2 text-white font-semibold ${value=="Available"?"bg-green-500":"bg-red-500"}`}>{value}</div>
        )
      }
    },
    {
      header: "In Stock",
      accessorKey: 'stock',
      cell:({getValue})=>{
        const value = getValue();
        return (
          <span className={` px-1 py-2 ${value>0?"text-green-500":"text-red-500"}`}>{value>0?value:"Out of Stock"}</span>
        )
      }
    },
    {
      header: "Actions",
      accessorKey: "action",
      cell: ({ row }) => {
        const value = row.original
        console.log(value)
        return (
          <div className='flex gap-3 cursor-pointer'>

            <SquarePen size={20} onClick={() => { console.log("edit", value) }} />
            <Trash size={20} onClick={() => {dispatch(deleteProducts(value.id)) }} />
          </div>
        )
      }
    }
  ]
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema:productScehma,
    onSubmit:(val)=>{
      dispatch(setProductsData(val))
      dispatch(setOpenAdd(false))
      formik.resetForm()
    }
  })

  return (
    <div>
      <DataTable columns={columns} data={productsData} handleAdd={handleProducts} />
     <CustomForm FIELDS={PRODUCT_FIELDS} title='Products' formik={formik} state={openForm} setter={()=>{dispatch(setOpenAdd(false))}}/>
    </div>
  )
}

export default Products
