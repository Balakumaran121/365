import { useDispatch, useSelector } from 'react-redux';
import CustomForm from '../componenst/CustomForm';
import DataTable from '../componenst/DataTable';
import { TRIPS_FIELD } from '../constants';
import { setOpenAdd } from '../redux/slices/menuSlice';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { tripScehma } from '../validations/tripSchema';
import { deleteTripsData, setTripsData } from '../redux/slices/tripSlice';
import { Trash, SquarePen } from 'lucide-react';

const Trips = () => { 
  const dispatch = useDispatch()
  const {tripsData}=useSelector((state)=>state.trip)
  const {openForm}=useSelector((state)=>state.menu)
  const handleDriverAdd = ()=>{
    const isAdd = true;
    if(isAdd){
      dispatch(setOpenAdd(true))
    }else{
      toast.error("Can't add trip")
    }
  }
  const columns =[
    {
      header:"Trip ID",
      accessorKey:"tripId"
    },
    {
      header:"Vehicle Number",
      accessorKey:'vehicleNumber'
    },
    {
      header:"Product",
      accessorKey:"productName"
    },
    {
      header:'Action',
      accessorKey:"action",
      cell:({row})=>{
        const value = row.original
        return (
          <div className='flex gap-3 cursor-pointer'>
            <SquarePen size={20} onClick={()=>console.log("edit",value)}/>
            <Trash size={20} onClick={()=>{dispatch(deleteTripsData(value.id))}}/>
          </div>
        )
      }
    }
    
  ]
  const formik =useFormik({
    initialValues:TRIPS_FIELD.reduce((acc,field)=>{
      acc[field.name]=""
      return acc;
    },{}),
    validationSchema:tripScehma,
    onSubmit:(val)=>{
      dispatch(setTripsData(val))
      dispatch(setOpenAdd(false))
      formik.resetForm()
      console.log(val)
    }
  })
  return (
    <div>
      <DataTable columns={columns} data={tripsData} handleAdd={handleDriverAdd}/>
      <CustomForm FIELDS={TRIPS_FIELD} title='Trips' state={openForm} setter={()=>{dispatch(setOpenAdd(false))}} formik={formik}/>
    </div>
  )
}

export default Trips
