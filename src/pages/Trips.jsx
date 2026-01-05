import DataTable from '../componenst/DataTable';

const Trips = () => {
  const columns =[
    {
      header:"Trip ID",
      accessorkey:"trip-id"
    },
    {
      header:"Source",
      accessorkey:'source'
    },
    {
      header:"Destination",
      accessorkey:"destination"
    }
    
  ]
  return (
  <DataTable columns={columns} data={[]}/>
  )
}

export default Trips
