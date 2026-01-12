import { useFormik } from 'formik';
import DataTable from '../componenst/DataTable';
import { VEHICLE_FIELD } from '../constants';
import { vehicleSchema } from '../validaionSchema/vehicleSchema';
import CustomForm from '../componenst/CustomForm';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenAdd } from '../redux/slices/menuSlice';
import { setVehicleData } from '../redux/slices/vehicleSlice';

const Vehicle = () => {
  const dispatch = useDispatch()
  const {vehicleData}=useSelector((state)=>state.vehicle)
  const {openForm}=useSelector((state)=>state.menu)
  const columns =[
    {
      header:"Vehicle ID",
      accessorKey:"vehicleId"
    },
    {
      header:"Vehicle Name",
      accessorKey:'vehicleName'
    }, 
    {
      header:"Vehcile Type",
      accessorKey:"vehicleType"
    },
    {
      header:"Vehicle Capacity",
      accessorKey:"vehicleCapacity",
      cell:({getValue})=>{
        const value = getValue()
        return (
          <div>
            {value} Ton
          </div>
        )
      }
    }
  ]

  const formik = useFormik({
    initialValues:VEHICLE_FIELD.reduce((acc,field)=>{
      acc[field.name]="";
      return acc;
    },{}),
    validationSchema:vehicleSchema,
    onSubmit:(val)=>{
      dispatch(setVehicleData(val))
      dispatch(setOpenAdd(false))
    }

  })
  const handleVehicleAdd = ()=>{
    dispatch(setOpenAdd(true))
  }
  return (
    <div>
      <DataTable columns={columns} data={vehicleData} handleAdd={handleVehicleAdd}/>
      <CustomForm formik={formik} FIELDS={VEHICLE_FIELD} title='Vehicle' state={openForm} setter={()=>{dispatch(setOpenAdd(false))}}/>
    </div>
  )
}

export default Vehicle
