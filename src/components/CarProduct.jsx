import React, { use, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RentalContext } from '../Context/RentalContext'
import { ICONS } from '../assets/assets'
import DatePicker from 'react-datepicker'
import { toast } from 'react-toastify'



const CarProduct = () => {
  const { carId } = useParams()
  const { cars, currency, startDate, setStartDate, endDate, setEndDate,
  addCarBookings, navigate, carData, setCarData, setHasNewBooking }
  = useContext(RentalContext);
  const [totalPrice, setTotalPrice] = useState(0)

  const [image, setImage] = useState('');


  const [BookingId, setBookingId] = useState(carId)

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState();
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [bookingDay, setBookingDay] = useState(new Date())


  const SubmitBooking = (e) => {
    e.preventDefault();
    if (BookingId && startDate && endDate) {
      const newBooking = {
        userId: 'user2',
        id: Date.now().toString(),
        carId: parseInt(BookingId),
        pickupDate: startDate,
        returnDate: endDate,
        carImage: image,
        carMake: make,
        carModel: model,
        carYear: year,
        carPrice: price,
        carName:name,
        carLocation: location,
        myBookingDay: bookingDay,
        carTotal:totalPrice,

      };
      addCarBookings(newBooking);
      setHasNewBooking(true)  //myBookings.length > 0

      toast.success('Booking successful!')
    } else {
      toast.error('Please fill in all details')
    }
  }


  const DurationInDays = (start, end) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end)
    //calculate diff in time and convert to days
    const timeDiff = endDate.getTime() - startDate.getTime();
    //round up to the nearest full day
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0
  }

  const TotalCarPrice = () => {
    const duration = DurationInDays(startDate, endDate);
    if (duration === 0 || !carData) return 0;
    const price = duration * carData.price;
    const total = price;
    return total;
  }
  useEffect(() => {
    const carTotal = TotalCarPrice();
    setTotalPrice(carTotal)
  }, [startDate, endDate, carData])



  const fetchCarInfo = () => {
    cars.map(item => {
      if (item._id === carId) {
        setCarData(item);
        setImage(item.image[0]);

        setLocation(item.location)
        setMake(item.make);
        setModel(item.model);
        setYear(item.year);
        setPrice(item.price)
        setName(item.name)
        return null;
      }
    })

  }
  const backToAllCars = () => {
    window.location.href = '/cars'
    navigate('/cars')
  }

  useEffect(() => {
    fetchCarInfo()
  }, [cars, carId])


  return carData ? (
    <div className='mt-10 xxs:px-10 md:px-15 lg:px-20 xl:px-30
    text-gray-800' >
      <div className='flex flex-col gap-5'>
        {/* back to all cars */}
        <button className='flex items-center gap-3 w-fit'
          onClick={backToAllCars}>
          <img src={ICONS.backArrowIcon.src} alt={ICONS.backArrowIcon.alt}
            className='w-3 h-3' />
          <p>Back to all cars</p>
        </button>
        {/* Item Booking details */}
        <form className='flex flex-col gap-3' onSubmit={SubmitBooking}>
          <div className='grid gap-8 md:grid-cols-[1fr_0.9fr] 
          lg:grid-cols-[1.1fr_0.6fr] '>
            {/* car Item main image  */}
            <img src={image} alt={carData.name} className='w-full xxs:h-70 xs:h-90
            rounded-lg ring ring-gray-200 shadow-sm'/>
            {/* booking details */}
            <div className='ring ring-gray-200 shadow-lg p-5 flex
            flex-col gap-5 rounded-lg'>
              <div className='flex justify-between border-b border-gray-800
                pb-3'>
                <p className='font-bold text-lg'>{currency}{carData.price}</p>
                <p className='font-medium'>per day</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Pickup Date</p>
                <div className='border border-gray-300 flex justify-between 
                items-center px-2 rounded-sm py-0.5 shadow-md'>
                  <DatePicker selected={startDate} onChange={(date) =>
                    setStartDate(date)} wrapperClassName='w-full' className='
                  text-sm font-medium pl-1.5 py-1 outline-0 w-full' minDate={new Date().toISOString().split('T')[0]}/>
                  <img src={ICONS.calender.src} alt={ICONS.calender.alt}
                    className='w-4 h-4' />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className=' font-bold'>Return Date</p>
                <div className='border border-gray-300 flex justify-between 
                items-center px-2 rounded-sm py-0.5 shadow-md'>
                  <DatePicker selected={endDate} onChange={(date) =>
                    setEndDate(date)} wrapperClassName='w-full' className='
                  text-sm font-medium py-1 outline-0 w-full' minDate={new Date().toISOString().split('T')[0]}/>
                  <img src={ICONS.calender.src} alt={ICONS.calender.alt}
                    className='w-4 h-4' />
                </div>
              </div>
              <div>
                <h2>Bookings Total</h2>
                <p>Total: {totalPrice}
                </p>
              </div>
              <button type='submit'
                className='bg-blue-800 text-slate-100 py-2.5 px-4 
              text-sm font-bold w-full'>
                Reserve Now
              </button>
              <p className='text-xs text-center font-medium italic'>
                No credit card required to reserve
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='grid md:grid-cols-[1.2fr_0.6fr] gap-8'>
              <p className='font-bold text-gray-800
              xxs:max-w-[90%] xs:max-w-[70%] lg:max-w-[40%] 
              py-3 px-3 text-xl'>
                {carData.make} {carData.model} -
                <span className='font-bold'> {carData.year}</span>
              </p>
              <div className='opacity-0'></div>
            </div>

            {/* bottom images slide */}
            <div className='grid lg:grid-cols-[1.4fr_0.4fr] 
            xl:grid-cols-[1.2fr_0.6fr] gap-8'>
              <div className='flex gap-5 overflow-x-scroll
               [scrollbar-width]:none [&::-webkit-scrollbar]:hidden'>
                {carData.image.map((item, index) => {
                  return <img src={item} alt='' key={index} className='w-30 h-20
                  md:w-40 md:h-27'
                    onClick={() => setImage(item)} />
                })}
              </div>
              <div className='opacity-0'></div>
            </div>
          </div>
          {/* car features */}
          <div className='mt-3 flex flex-col gap-5'>
            <div className='grid lg:grid-cols-[1.4fr_0.4fr] 
            xl:grid-cols-[1.2fr_0.6fr] gap-8'>
              <div className='grid xs:grid-cols-2 md:grid-cols-4 gap-2 items-center'>
                <p className='font-bold bg-slate-200 flex items-center
                px-5 py-2 gap-2'>
                  <img src={ICONS.car1.src} alt={ICONS.car1.alt}
                    className='w-7 h-7' />
                  {carData.transmission}
                </p>
                <p className='font-bold bg-slate-200 flex items-center
                px-5 py-2 gap-2'>
                  <img src={ICONS.fuelIcon.src} alt={ICONS.fuelIcon.alt}
                    className='w-6 h-6' />
                  {carData.fuelType}
                </p>
                <p className='font-bold bg-slate-200 flex items-center
                px-5 py-2 gap-2'>
                  <img src={ICONS.car1.src} alt={ICONS.car1.alt}
                    className='w-7 h-7' />
                  {carData.engine}
                </p>
                <p className='font-bold bg-slate-200 flex items-center
                px-5 py-2 gap-2'>
                  <img src={ICONS.location.src} alt={ICONS.location.alt}
                    className='w-5 h-6' />
                  {carData.location}
                </p>
              </div>
              <div className='opacity-0'></div>
            </div>
            {/* car description */}
            <div className='grid xl:grid-cols-[1.2fr_0.6fr] 
            lg:grid-cols-[1.4fr_0.6fr] gap-8'>
              <div className='flex flex-col gap-3'>
                <p className='font-extrabold'>Description</p>
                <p className='w-full md:max-w-[90%] lg:max-w-full xl:max-w-[90%]
                 font-medium'>
                  {carData.description}
                </p>
              </div>
              <div className='opacity-0'></div>
            </div>

            {/* more features */}
            <div className='grid xl:grid-cols-[1.2fr_0.6fr] 
            lg:grid-cols-[1.4fr_0.6fr] gap-8'>
              <div>
                <p className='font-extrabold'>Features</p>
                <ul className='grid grid-cols-2 xxs:gap-2 xs:gap-0'>
                  {carData.features.map((item, index) => {
                    return <li key={index} className='flex items-center gap-2
                  font-medium'>
                      <img src={ICONS.checkColoured.src} alt={ICONS.checkColoured.alt}
                        className='w-3 h-3' />
                      {item}
                    </li>
                  })}
                </ul>
              </div>
              <div className='opacity-0'></div>
            </div>

          </div>

        </form>

      </div>
    </div>
  ) : <div></div>

}

export default CarProduct
