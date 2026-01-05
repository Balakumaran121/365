import DataTable from '../componenst/DataTable';

const Vehicle = () => {
  const columns =[
    {
      header:"Vehicle ID",
      accessorkey:"vehicle-id"
    },
    {
      header:"Vehicle Name",
      accessorkey:'vehicle-name'
    },
    
  ]
  return (
  <DataTable columns={columns} data={[]}/>
  )
}

export default Vehicle
