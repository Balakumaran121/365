import TopBar from '../componenst/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../componenst/Footer'
import { Toaster } from 'react-hot-toast'

const CommonLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className='sticky top-0 z-50'>
                <TopBar />
            </header>
            <main className='flex-1'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
        </div>
    )
}

export default CommonLayout
