import { ICONS } from '../constants'

const Footer = () => {
  return (
    <div className='text-lg font-medium flex justify-between items-center p-4'>
      <div className='text-sm md:text-lg font-semibold md:font-bold text-pharlap-700 hover:text-pharlap-800'>All rights reserved Bk.Tech</div>
      <div className='flex gap-5'>

        {
          // eslint-disable-next-line no-unused-vars
          ICONS.map(({ Icon, id, label }) => (
            <button key={id} aria-label={label} type='button' className='rounded-full bg-pharlap-500 size-10 flex items-center justify-center transition-all duration-200 hover:bg-pharlap-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pharlap-400 text-white'>
              <Icon size={20} />
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Footer
