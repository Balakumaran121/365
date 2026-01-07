import DataTable from '../componenst/DataTable'

const Products = () => {
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
  return (
    <div>
      <DataTable columns={columns} data={[]} />
    </div>
  )
}

export default Products
