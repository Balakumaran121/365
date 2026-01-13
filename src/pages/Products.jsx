import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../componenst/DataTable'
import { setOpenAdd } from '../redux/slices/menuSlice';
import toast from 'react-hot-toast';
import CustomForm from '../componenst/CustomForm';
import { PRODUCT_FIELDS } from '../constants';
import { useFormik } from 'formik';
import { productScehma } from '../validations/productSchema';
import { addBulkProducts, deleteProducts, setProductsData } from '../redux/slices/productSlice';
import ActionButtons from '../componenst/ActionButtons';
import { useState } from 'react';
import { X } from 'lucide-react';
import { convertToproduct, parseCsv } from '../utils';


const initialValues = PRODUCT_FIELDS.reduce((acc, field) => {
  acc[field.name] = ""
  return acc;
}, {})
const Products = () => {
  const dispatch = useDispatch()
  const { openForm } = useSelector((state) => state.menu)
  const { productsData } = useSelector((state) => state.products)
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [filesData, setFilesData] = useState([])
  const handleProducts = () => {
    const isAdd = true
    if (isAdd) {
      dispatch(setOpenAdd(true))
    } else {
      toast.error("Can't Add Product")
    }
  }
  const columns = [
    {
      header: "Product ID",
      accessorKey: "id"
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
      header: "Status",
      accessorKey: "status",
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <div className={`w-fit rounded-full px-2 text-white font-semibold ${value == "Available" ? "bg-green-500" : "bg-red-500"}`}>{value}</div>
        )
      }
    },
    {
      header: "In Stock",
      accessorKey: 'stock',
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <span className={` px-1 py-2 ${value > 0 ? "text-green-500" : "text-red-500"}`}>{value > 0 ? value : "Out of Stock"}</span>
        )
      }
    },
    {
      header: "Actions",
      accessorKey: "action",
      cell: ({ row }) => {
        const value = row.original
        return (
          <ActionButtons handleDelete={() => { dispatch(deleteProducts(value.id)) }} handleEdit={() => { console.log("edit", value) }} />
        )
      }
    }
  ]
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: productScehma,
    onSubmit: (val) => {
      dispatch(setProductsData(val))
      dispatch(setOpenAdd(false))
      formik.resetForm()
    }
  })
  const handleUploadFiles = () => {
    setShowUploadForm(true)
  }
  const handleChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return;
    const allowedTypes = [
      "text/csv",
      "appliaction/vnd.openxmlformats-oddicedosument.spreedsheetml.sheet"
    ]
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only csv and xlsx file formats only accepts")
    } else {
      const filesData = await parseCsv(file)
      const newProdcuts = convertToproduct(filesData, productsData)
      setFilesData(newProdcuts)

    }
  }
  const handleUpload = () => {
    dispatch(addBulkProducts(filesData))
    setShowUploadForm(false)
  }
  return (
    <div >
      <DataTable columns={columns} data={productsData} handleAdd={handleProducts} showUploadButton={true} handleUpload={handleUploadFiles} />
      <CustomForm FIELDS={PRODUCT_FIELDS} title='Products' formik={formik} state={openForm} setter={() => { dispatch(setOpenAdd(false)) }} />
      {
        showUploadForm &&
        <div className='fixed z-50 inset-0 flex justify-center  items-center bg-black/40'>
          <div className='bg-white rounded-2xl w-[40%]'>
            <div className='flex m-2 text-center justify-between '>

              <h1 className='text-pharlap-700 hover:text-pharlap-950'>Upload</h1>
              <X className='text-lg cursor-pointer' onClick={() => setShowUploadForm(false)} />
            </div>
            <div className='m-2 flex flex-col space-y-16'>
              <input type='file' onChange={handleChange} accept='.csv,.xlsx' />
              <button className='px-2 bg-pharlap-500 hover:bg-pharlap-600 cursor-pointer rounded-full text-white text-lg font-semibold' onClick={handleUpload}>Upload</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Products
