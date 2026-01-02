import TopBar from '../componenst/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../componenst/Footer'

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
        </div>
    )
}

export default CommonLayout
