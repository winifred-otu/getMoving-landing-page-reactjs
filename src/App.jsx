import React from 'react'
import "react-datepicker/dist/react-datepicker.css"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from './pages/Home'
import Cars from "./pages/Cars"
import MyBookings from "./pages/MyBookings"
import CarProduct from "./components/CarProduct"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Checkout from './components/Checkout'
import Confirmation from './components/Confirmation'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cars' element={<Cars />}/>
        <Route path='/car/:carId' element={<CarProduct />}/>
        <Route path='my-bookings' element={<MyBookings />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
