import React from 'react'
import CustomInput from './CustomInput';
import { X } from 'lucide-react';

const CustomForm = ({formik,FIELDS,setter,state,title="Order"}) => {
  return (
    
      <div className={`fixed top-0 right-0 h-full w-100 bg-white z-80 shadow-lg transform transition-transform duration-300 ease-in-out ${state ? "translate-x-0" : "translate-x-full "} `}>
        <form onSubmit={formik?.handleSubmit} className=' flex flex-col  h-full'>
           

          <div className='flex justify-between items-center p-4 border-b' onClick={() => { setter();formik?.resetForm() }}>
            <h1 className='text-lg font-semibold  '>Add {title}</h1>
            <X className='hover:text-red-500 cursor-pointer' />
          </div>
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>

          {
            FIELDS.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                options={field.options}
                formik={formik}
              />
            ))
          }
          </div>
            
            <div className='p-4 border-t bg-white'>

          <button className='p-3  bg-green-500 hover:bg-green-600 rounded w-full cursor-pointer text-lg font-semibold ' type='submit'>Submit</button>
            </div>
        </form>

      </div>
  )
}

export default CustomForm
