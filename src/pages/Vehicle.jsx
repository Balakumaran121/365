import { useFormik } from 'formik';
import DataTable from '../componenst/DataTable';
import { VEHICLE_FIELD } from '../constants';
import { vehicleSchema } from '../validations/vehicleSchema';
import CustomForm from '../componenst/CustomForm';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenAdd } from '../redux/slices/menuSlice';
import { deleteVehiclesData, setVehicleData } from '../redux/slices/vehicleSlice';
import ActionButtons from '../componenst/ActionButtons';

const Vehicle = () => {
  const dispatch = useDispatch()
  const { vehicleData } = useSelector((state) => state.vehicle)
  const { openForm } = useSelector((state) => state.menu)
  const columns = [
    {
      header: "Vehicle ID",
      accessorKey: "vehicleId"
    },
    {
      header: "Vehicle Name",
      accessorKey: 'vehicleName'
    },
    {
      header: "Vehcile Type",
      accessorKey: "vehicleType"
    },
    {
      header: "Vehicle Capacity",
      accessorKey: "vehicleCapacity",
      cell: ({ getValue }) => {
        const value = getValue()
        return (
          <div>
            {value} Ton
          </div>
        )
      }
    },
    {
      header: "Actions",
      accessorKey: "action",
      cell: ({ row }) => {
        const value = row.original
        return (
          <ActionButtons handleDelete={() => dispatch(deleteVehiclesData(value.id))} handleEdit={() => console.log("edit", value)} />
        )
      }
    }
  ]

  const formik = useFormik({
    initialValues: VEHICLE_FIELD.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {}),
    validationSchema: vehicleSchema,
    onSubmit: (val) => {
      dispatch(setVehicleData(val))
      dispatch(setOpenAdd(false))
    }

  })
  const handleVehicleAdd = () => {
    dispatch(setOpenAdd(true))
  }
  return (
    <div>
      <DataTable columns={columns} data={vehicleData} handleAdd={handleVehicleAdd} />
      <CustomForm formik={formik} FIELDS={VEHICLE_FIELD} title='Vehicle' state={openForm} setter={() => { dispatch(setOpenAdd(false)) }} />
    </div>
  )
}

export default Vehicle
