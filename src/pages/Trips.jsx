import { useDispatch, useSelector } from 'react-redux';
import CustomForm from '../componenst/CustomForm';
import DataTable from '../componenst/DataTable';
import { TRIPS_FIELD } from '../constants';
import { setOpenAdd } from '../redux/slices/menuSlice';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { tripScehma } from '../validations/tripSchema';
import { deleteTripsData, setTripsData } from '../redux/slices/tripSlice';
import ActionButtons from '../componenst/ActionButtons';

const Trips = () => {
  const dispatch = useDispatch()
  const { tripsData } = useSelector((state) => state.trip)
  const { openForm } = useSelector((state) => state.menu)
  const handleDriverAdd = () => {
    const isAdd = true;
    if (isAdd) {
      dispatch(setOpenAdd(true))
    } else {
      toast.error("Can't add trip")
    }
  }
  const columns = [
    {
      header: "Trip ID",
      accessorKey: "tripId"
    },
    {
      header: "Vehicle Number",
      accessorKey: 'vehicleNumber'
    },
    {
      header: "Product",
      accessorKey: "productName"
    },
    {
      header: 'Action',
      accessorKey: "action",
      cell: ({ row }) => {
        const value = row.original
        return (
          <ActionButtons handleDelete={() => { dispatch(deleteTripsData(value.id)) }} handleEdit={() => console.log("edit", value)} />
        )
      }
    }

  ]
  const formik = useFormik({
    initialValues: TRIPS_FIELD.reduce((acc, field) => {
      acc[field.name] = ""
      return acc;
    }, {}),
    validationSchema: tripScehma,
    onSubmit: (val) => {
      dispatch(setTripsData(val))
      dispatch(setOpenAdd(false))
      formik.resetForm()
    }
  })
  return (
    <div>
      <DataTable columns={columns} data={tripsData} handleAdd={handleDriverAdd} />
      <CustomForm FIELDS={TRIPS_FIELD} title='Trips' state={openForm} setter={() => { dispatch(setOpenAdd(false)) }} formik={formik} />
    </div>
  )
}

export default Trips
