import { Cog, Sun } from 'lucide-react'

const Test = () => {
  return (
    <div className='bg-teal-950 h-screen p-10'>
        <div className='p-10 bg-teal-500 rounded'>
        <div><Cog size={60}/><h1>Extensions</h1></div>
      <div className='p-2 bg-slate-400'>

      <Sun />
      </div>
        </div>
      <div></div>
    </div>
  )
}

export default Test
