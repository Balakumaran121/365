import React from 'react'

const CustomInput = ({ placeholder, name, label,type="text",formik,options=[] }) => {
    const error = formik?.touched[name] && formik?.errors[name]
    return (
        <div className='flex flex-col gap-2 px-2'>
            <label htmlFor={name} className='text-lg font-semibold'>{label}</label>
          {type==="text"?
          <input id={name} name={name} type={type} placeholder={placeholder} value={formik.values[name]??""} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-black p-2 rounded-lg' />:
          <select id={name} name={name}  value={formik.values[name]??""} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-black p-2 rounded-lg'>
            <option value=""></option>
            {options.map((opt)=>(
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
          </select>
        
        }  
        {error && <p className='text-red-500 text-xs'>{error}</p>}
        </div>
    )
}

export default CustomInput
