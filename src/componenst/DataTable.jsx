import { useReactTable,getCoreRowModel,getSortedRowModel,getPaginationRowModel,flexRender } from "@tanstack/react-table";
import { useState } from "react";

const DataTable = ({data,columns})=>{
    const [sorting,setSorting]=useState([]);
    const [columnVisibility,setColumnVisibility]=useState({});
    const [showColumnsMenu,setShowColumnsMenu]=useState(false);

    const table = useReactTable({
        data,
        columns,
        state:{
            sorting,
            columnVisibility
        },
        onSortingChange:setSorting,
        onColumnVisibilityChange:setColumnVisibility,
        getCoreRowModel:getCoreRowModel(),
        getSortRowModel:getSortedRowModel(),
        getPaginationRowModel:getPaginationRowModel(),
    })

    return (
        <div className="w-full">
            <div className="p-2 rounded-md bg-green-500 w-fit text-white text-lg font-semibold block m-3 ml-auto" onClick={()=>setShowColumnsMenu(prev=>!prev)}>
                Open Toggle Columns
            </div>
            {
                showColumnsMenu && 
            <div className="flex gap-4 mb-4 flex-wrap">
                {table.getAllLeafColumns().map((column)=>(
                    <label key={column.id} className="flex gap-2 items-center text-sm">
                        <input type="checkbox" checked={column.getIsVisible()} onChange={column.getToggleVisibilityHandler()} />{column.id}
                    </label>
                ))}
            </div>
            }
        </div>
    )
}


export default DataTable;