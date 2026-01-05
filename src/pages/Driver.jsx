import React from 'react'
import DataTable from '../componenst/DataTable'

const Driver = () => {
  const columns =[
    {
      header:"Driver Id",
      accessorkey:"driver-id"
    },
    {
      header:"Driver Name",
      accessorkey:"driver-name"
    }
  ]
  return (
    <DataTable columns={columns} data={[]}/>
  )
}

export default Driver
