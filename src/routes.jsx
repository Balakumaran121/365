import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Trips from './pages/Trips'
import Settings from './pages/Settings'
import Driver from './pages/Driver'
import Vehicle from './pages/Vehicle'
import Products from './pages/Products'
import Orders from './pages/Orders'
import CommonLayout from './layout/CommonLayout'
import PageNotFound from './componenst/PageNotFound'
import Test from './pages/Test'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CommonLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="trips" element={<Trips />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="driver" element={<Driver />} />
                    <Route path="vehicle" element={<Vehicle />} />
                    <Route path='products' element={<Products />} />
                    <Route path='orders' element={<Orders />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
                <Route path='/test' element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
