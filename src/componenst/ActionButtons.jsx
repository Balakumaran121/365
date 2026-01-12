import { SquarePen, Trash } from 'lucide-react'
import React from 'react'

const ActionButtons = ({handleDelete,handleEdit}) => {
  return (
    <div className='cursor-pointer flex items-center gap-3'>
      <SquarePen size={20} onClick={handleEdit} className='hover:text-blue-500'/>
      <Trash size={20} onClick={handleDelete} className='hover:text-red-500'/>
    </div>
  )
}

export default ActionButtons
