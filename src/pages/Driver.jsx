import React from 'react'
import DataTable from '../componenst/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import CustomForm from '../componenst/CustomForm'
import { setOpenAdd } from '../redux/slices/menuSlice'
import { DRIVER_FIELDS } from '../constants'
import { useFormik } from 'formik'
import { driverScehma } from '../validaionSchema/driverSchema'
import toast from 'react-hot-toast'
import { deleteDriversData, setDriverData } from '../redux/slices/driverSlice'
import { SquarePen, Trash } from 'lucide-react'

const Driver = () => {
  const dispatch =useDispatch()
  const {driversData}= useSelector((state)=>state.driver)
  const {openForm}=useSelector((state)=>state.menu)
  const formik = useFormik({
    initialValues:{},
    validationSchema:driverScehma,
    onSubmit:(val)=>{
      dispatch(setDriverData(val))
      dispatch(setOpenAdd(false))
      formik.resetForm()
    }
  })
  const handleDrivers = ()=>{
    const isAdd = true;
    if(isAdd){
      dispatch(setOpenAdd(true))
    }else{
      toast.error("Can't Add Driver")
    }
  }

  const columns =[
    {
      header:"Driver Id",
      accessorKey:"driverId"
    },
    {
      header:"Driver Name",
      accessorKey:"driverName"
    },
    {
      header:"Actions",
      accessorKey:"action",
      cell:({row})=>{
        const value = row.original

        return(
          <div className='flex gap-3 cursor-pointer'>
            <SquarePen size={20} onClick={()=>console.log("edit",value)}/>
            <Trash size={20} onClick={()=>{dispatch(deleteDriversData(value.id))}}/>
          </div>
        )
      }
    }
  ]
  return (
    <div>
      <DataTable columns={columns}  data={driversData} handleAdd={handleDrivers}/>
      <CustomForm FIELDS={DRIVER_FIELDS} title="Driver" setter={()=>{dispatch(setOpenAdd(false))}} state={openForm} formik={formik}/>
    </div>
  )
}

export default Driver
