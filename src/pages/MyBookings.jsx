import React, { useContext, useEffect, useState } from 'react'
import { RentalContext } from '../Context/RentalContext'
import { ICONS } from "../assets/assets"

const MyBookings = () => {
  const { currency, navigate, totalBookings, setTotalBookings, myBookings,
    setMyBookings } = useContext(RentalContext)

  useEffect(() => {
    const allBookings = localStorage.getItem('carBookings');
    if (allBookings) {
      setMyBookings(JSON.parse(allBookings))
    }

  }, [])

  const cancelBooking = (idToCancel) => {
    const allBookings = JSON.parse(localStorage.getItem('carBookings')) || []
    const updateBookings = allBookings.filter((booking) => booking.id !== idToCancel)
    localStorage.setItem('carBookings', JSON.stringify(updateBookings))
    setMyBookings(updateBookings)
    console.log(`Booking ${idToCancel} cancelled`)
  }

  useEffect(() => {
    const finalBookings = myBookings.reduce((sum, booking) =>
      sum + booking.carTotal, 0)
    setTotalBookings(finalBookings)

  }, [myBookings])



  return (
    <section className='mt-20 flex flex-col gap-5 text-gray-800
    xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30 md:min-h-[80vh]'>
      <div className='flex flex-col gap-4 md:gap-0 md:flex-row 
       md:justify-between ring ring-gray-300 xs:mb-5 md:mb-0
       rounded-2xl md:rounded-lg bg-gray-800 text-slate-100 p-5 md:p-3'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-3xl font-bold'>My Bookings</h2>
          <p>View and manage all your car bookings here</p>
        </div>
        <div className='flex flex-col xxs:items-end md:items-start'>
          <p className='font-bold'>Total Bookings:</p>
          <p className='text-2xl mb-3'>{currency} {totalBookings.toFixed(2)}</p>
          {totalBookings > 0 && (
            <button className='bg-blue-800 text-slate-100 p-2 inline-flex
           motion-safe:animate-pulse font-bold hover:animate-none 
           active:opacity-70 md:w-full md:justify-center '
              onClick={() => navigate('/checkout')}>
              Pay Now
            </button>
          )}

        </div>
      </div>
      {/* all bookings */}
      <div className='flex flex-col gap-10'>
        {myBookings.length === 0 ? 
          <p>You have no bookings</p>
          : (
            <>
              {myBookings.map((booking, index) => (
                <div key={index} className='flex flex-col xl:flex-row
                justify-between border-b-2 md:p-3
                  '>
                  <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex flex-col gap-3'>
                      <img src={booking.carImage} alt="" className='w-80 h-45 md:h-40
                      rounded-lg'/>
                      <div className='flex flex-col'>
                        <p className='font-extrabold'>
                          {booking.carMake} {booking.carModel}
                        </p>
                        <p className='font-medium'>
                          {booking.carYear} • {booking.carLocation} • {currency}{booking.carPrice} /per day
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 md:max-w-[50%]'>
                      <div className='flex gap-3 items-center h-fit'>
                        <p className='bg-slate-200 px-4 py-2 font-medium
                         text-md'>
                          Booking <span className='text-sm'>#{index + 1}</span>
                        </p>
                        <p className='bg-pink-50 pt-1 pb-1.5 px-3 rounded-full text-pink-700
                        font-bold text-xs inline-flex '>
                          pending
                        </p>
                      </div>
                      <div className='grid grid-cols-[0.2fr_1.7fr] gap-1 items-start'>

                        <div className='flex pt-1'>
                          <img src={ICONS.calender.src}
                            alt={ICONS.calender.alt} className='w-3 h-3' />
                        </div>
                        <div className='flex flex-col'>
                          <p>Rental Period</p>
                          <p className='font-bold text-sm'>
                            {new Date(booking.pickupDate).toISOString().split('T')[0]}
                            <span className='font-normal'> to</span> {new Date(booking.returnDate).toISOString().split('T')[0]}
                          </p>
                        </div>
                      </div>
                      <div className='grid grid-cols-[0.2fr_1.7fr] gap-1 items-start'>
                        <div className='flex pt-1'>
                          <img src={ICONS.location.src}
                            alt={ICONS.locationColoured.alt} className='w-3 h-3' />
                        </div>
                        <div className='flex flex-col'>
                          <p className='flex gap-2 items-center'>
                            Pick-up Location
                          </p>
                          <p className='font-bold text-sm'>{booking.carLocation}</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className='text-right flex flex-col gap-2'>
                    <div className='flex flex-col gap-0.5 text-right'>
                      <p className='text-sm'>Total Price</p>
                      <p className='text-blue-800 font-bold text-lg'>
                        {currency}{booking.carTotal.toFixed(2)}
                      </p>
                      <p className='text-sm'>
                        Booked on {new Date(booking.myBookingDay).toISOString().split('T')[0]}
                      </p>
                    </div>
                    <button className='bg-pink-700 px-6 py-2 
                    text-slate-100 md:self-end active:opacity-70' 
                    onClick={() => cancelBooking(booking.id)}>
                      Cancel booking
                    </button>

                  </div>

                </div>
              ))}
            </>
          )}

      </div>
    </section>
  )
}

export default MyBookings
