import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='w-full flex justify-center items-center h-[80Vh]'>
        <div className='text-center'>

      <h1 className='font-bold'>404 - Page Not Found</h1>
      <Link to="/" className='font-semibold underline hover:text-blue-500'>Go to Dashboard</Link>
        </div>
    </div>
  )
}

export default PageNotFound
