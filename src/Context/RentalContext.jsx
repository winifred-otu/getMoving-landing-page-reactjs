import React, { createContext, useState, useRef } from 'react'
import { cars } from '../assets/assets'
import { useNavigate } from 'react-router-dom';



export const RentalContext = createContext()
const RentalContextProvider = (props) => {
  const [startDate, setStartDate] = useState(); //useState(new Date())
  const [endDate, setEndDate] = useState(); //useState(new Date())
  const [search, setSearch] = useState('');
  const [carData, setCarData] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenRegister, setIsOpenRegister] = useState(false)
  const [myBookings, setMyBookings] = useState([]);
  const [totalBookings, setTotalBookings] = useState(0);
  const [hasNewBooking, setHasNewBooking] = useState(false) //myBookings.length > 0
  
  const navigate = useNavigate();
  const testimonialsRef = useRef();
  const currency = '₦';
  

  // const getCarBookings = (userId) =>{
  //   const allBookings = JSON.parse(localStorage.getItem('carBookings')) || []; //get it
  //   return allBookings.filter(booking => booking.userId === userId)
  // }
  
  const addCarBookings =(booking) => {
    let allBookings = JSON.parse(localStorage.getItem('carBookings')) || []; // also create and get it and manipulate it
    allBookings.push(booking)
    localStorage.setItem('carBookings', JSON.stringify(allBookings)) // send it back
  }
  // const cancelCarBookings = (bookingId) => {
  //   const allBookings = JSON.parse(localStorage.getItem('carBookings')) || []
  //   const updateBookings = allBookings.filter(booking => booking.id !== bookingId )
  //   localStorage.setItem('carBookings', JSON.stringify(updateBookings))
  // }
  
  const value = {
    cars,
    currency,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    carData,
    setCarData,
    search,
    setSearch,
    navigate,
    testimonialsRef,
    // getCarBookings,
    addCarBookings,
    // cancelCarBookings,
    isOpenLogin,
    setIsOpenLogin,
    isOpenRegister,
    setIsOpenRegister,
    myBookings,
    setMyBookings,
    totalBookings,
    setTotalBookings,
    hasNewBooking, setHasNewBooking
  }
  return (
    <RentalContext.Provider value={value}>
      {props.children}
    </RentalContext.Provider>
  )
}

export default RentalContextProvider
