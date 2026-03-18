import React, { useContext } from 'react'
import { RentalContext } from '../Context/RentalContext'

const Confirmation = () => {
  const { currency, myBookings, totalBookings } = useContext(RentalContext)
  return (
    <section className=' mt-20 md:min-h-[80vh]
    xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30'>
      <div className='flex flex-col gap-8'>
        {/* min-[768px]:max-[854px]:grid-cols-1! */}
        <div className='flex flex-col gap-7'>
          <p className='font-bold text-3xl'>My Orders</p>
          {myBookings.map((booking) => (
            <div key={booking.id} className='grid md:grid-cols-[1fr_0.7fr]
            items-center min-[768px]:max-[854px]:grid-cols-[1.2fr_0.7fr]!
            ring gap-5 md:gap-10 pt-4 pb-3 px-4
            ring-gray-300 shadow-lg  
              '>
              <div className='grid md:grid-cols-[0.5fr_1fr] gap-5'>
                <div className=''>
                  <img src={booking.carImage} alt={booking.carName}
                    className='w-full h-45 md:h-35 lg:h-35' />
                  <p className='text-sm font-medium'>{booking.carName}</p>
                </div>

                <div className=' flex flex-col gap-2'>
                  <div className='font-bold text-sm flex flex-col gap-1'>
                    Rental period:
                    <p className='font-normal text-sm'>
                      {new Date(booking.pickupDate).toISOString().split('T')[0]} to {new Date(booking.returnDate).toISOString().split('T')[0]}
                    </p>
                  </div>
                  <div className='flex gap-2 text-sm'>
                    <p className='font-bold'>Price:</p>
                    <p>{currency}{booking.carPrice} /per day • {booking.carLocation}</p>
                  </div>
                  <div className='flex gap-2 text-sm'>
                    <p className='font-bold'>Total: </p>
                    <p>{currency}{booking.carTotal}</p>
                  </div>
                  <div className='flex gap-2 text-sm'>
                    <p className='font-bold'>Payment:</p>
                    <div className='flex items-center gap-1'>
                      <p className='h-2 w-2 rounded-full bg-green-600 mt-0'></p>
                      <p >Paid</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className='flex justify-between
              '>
                <div className='flex items-center gap-1 text-sm'>
                  <p className='h-2 w-2 rounded-full bg-green-600'></p>
                  <p>Order placed</p>
                </div>

                <div>
                  <button className='border bg-gray-800 text-slate-50
                    text-sm px-3 py-2.5 md:py-2'>
                    Track order
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Confirmation
