import React from 'react'
import CustomInput from './CustomInput';
import { X } from 'lucide-react';

const CustomForm = ({formik,FIELDS,setter,state}) => {
  return (
    
      <div className={`fixed top-0 right-0 h-full w-100 bg-white z-80 shadow-lg transform transition-transform duration-300 ease-in-out ${state ? "translate-x-0" : "translate-x-full "} `}>
        <form onSubmit={formik?.handleSubmit} className='space-y-4 flex flex-col justify-between h-full'>
            <div className='space-y-4'>

          <div className='flex justify-between p-4' onClick={() => { setter();formik?.resetForm() }}>
            <h1 className='text-lg font-semibold  hover:text-gray-500'>Add Orders</h1>
            <X className='hover:text-red-500 cursor-pointer' />
          </div>
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
            <div className='p-4 border-t'>

          <button className='p-3 mx-14 bg-green-500 hover:bg-green-700 rounded w-[70%] cursor-pointer text-lg font-semibold ' type='submit'>Submit</button>
            </div>
        </form>

      </div>
  )
}

export default CustomForm
