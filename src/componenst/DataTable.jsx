import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const DataTable = ({ data=[], columns=[],handleAdd=()=>{} }) => {
    const {pathname}= useLocation()
    const RouteName =pathname.slice(1).charAt(0).toUpperCase()+ pathname.slice(2)
    
    const [sorting, setSorting] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [showColumnsMenu, setShowColumnsMenu] = useState(false);
    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility
        },
        onSortingChange: setSorting,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })
const visibleColumns = table.getVisibleLeafColumns()
const menuRef = useRef(null)
useEffect(()=>{
const handleClickOutside = (event)=>{
    if(menuRef.current && !menuRef.current.contains(event.target)){
        setShowColumnsMenu(false)
    }
}
    document.addEventListener('click', handleClickOutside);
    return ()=>{
        document.removeEventListener('click ', handleClickOutside);
    }
},[])
    return (
        <div className="w-full">
            <div className="relative">
                    <div className="flex items-center px-2">

                <button className="p-2 rounded-md bg-green-500 w-fit text-white text-lg font-semibold block m-3 ml-auto cursor-pointer"
                 onClick={(e) =>{ e.stopPropagation();setShowColumnsMenu(prev => !prev)}}>
                    Open Toggle Columns
                </button>
                <button onClick={handleAdd} className="bg-green-500 p-2 text-white rounded-md text-lg font-semibold cursor-pointer">
                    Add {RouteName}
                </button>
                    </div>
                {
                    showColumnsMenu &&

                    <div ref={menuRef} onClick={(e)=>e.stopPropagation()} className="absolute right-10 z-10 shadow-md flex flex-col gap-4 mb-4 bg-slate-100 w-fit p-3">
                        {table.getAllLeafColumns().map((column) => (
                            <label key={column.id} className="flex gap-2 items-center text-sm">
                                <input type="checkbox" className="peer hidden" checked={column.getIsVisible()} onChange={column.getToggleVisibilityHandler()} />
                                <span className="size-4 rounded border border-gray-400 peer-checked:bg-green-600 peer-checked:border-green-600" />
                                <span>{column.columnDef.header}</span>
                            </label>
                        ))}
                    </div>

                }
            </div>
            {
                visibleColumns.length===0?(
                    <div className="p-4 text-center text-gray-500">No columns selected</div>
                ):<>
                <div className="border border-gray-300 rounded">
                {
                    table.getHeaderGroups().map((headerGroup) => (
                        <div key={headerGroup.id} className="grid bg-gray-100 border-b" style={{ gridTemplateColumns: `repeat(${headerGroup.headers.length},1fr)` }}>
                            {
                                headerGroup.headers.map((header) => (
                                    <div key={header.id} className="p-3 font-semibold cursor-pointer border-r last:border-0 flex gap-2" onClick={header.column.getToggleSortingHandler()}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{ asc: <ChevronDown />, desc: <ChevronUp /> }[header.column.getIsSorted()] ?? null}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

                {
                  table.getRowModel().rows.length>0? ( table.getRowModel().rows?.map((row) => (
                        <div ley={row.id} className="grid border-b hover:bg-gray-50" style={{ gridTemplateColumns: `repeat(${row.getVisibleCells().length},1fr)` }}>
                            {row.getVisibleCells().map((cell) => (
                                <div key={cell.id} className="p-3 border-r last:border-r-0">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </div>
                            ))}
                        </div>
                    ))):(
                        <div className="h-40 flex justify-center items-center">
                           <h1> No Records Founds</h1>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded border hover:bg-gray-100 hover:shadow-md" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Prev</button>
                    <button className="px-3 py-1 rounded border hover:bg-gray-100 hover:shadow-md" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next</button>
                    <span className="text-sm  flex items-center">Page {table.getState().pagination.pageIndex+1} of {" "}{table.getPageCount()}</span>
                </div>
            </div>
                </>
            }

            
        </div>
    )
}


export default DataTable;