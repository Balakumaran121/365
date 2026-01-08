import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../componenst/DataTable'
import { setOpenAdd } from '../redux/slices/menuSlice';
import toast from 'react-hot-toast';
import CustomForm from '../componenst/CustomForm';
import { PRODUCT_FIELDS } from '../constants';
import { useFormik } from 'formik';
import { productScehma } from '../validaionSchema/productSchema';


const initialValues = PRODUCT_FIELDS.reduce((acc,field)=>{
  acc[field.name]=""
  return acc;
},{})
const Products = () => {
  const dispatch = useDispatch()
  const {openForm}=useSelector((state)=>state.menu)
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
      header: "In Stock",
      accessorKey: 'stock',
      cell:({getValue})=>{
        const value = getValue();
        return (
          <span className={` px-1 py-2 ${value>0?"text-green-500":"text-red-500"}`}>{value>0?value:"Out of Stock"}</span>
        )
      }
    }
  ]
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema:productScehma,
  })
  return (
    <div>
      <DataTable columns={columns} data={[]} handleAdd={handleProducts} />
     <CustomForm FIELDS={PRODUCT_FIELDS} formik={formik} state={openForm} setter={()=>{dispatch(setOpenAdd())}}/>
    </div>
  )
}

export default Products
