import React, { useContext, useState } from 'react'
import { ICONS } from "../assets/assets"
import { cars } from "../assets/assets"
import DatePicker from 'react-datepicker'
import { BiSearch } from 'react-icons/bi'
import { RentalContext } from '../Context/RentalContext'


const Booking = () => {
  const { search, setSearch, navigate,  
  } = useContext(RentalContext)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const searchItem = () => {
    if (search && startDate && endDate) {
      search;
      navigate('/cars');
    }
  }

  return (
    <div className='flex flex-col text-gray-800 gap-7 mt-30 
    xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30'>
      <p className='text-2xl font-extrabold text-center'>Book a car</p>
      <div className='grid md:grid-cols-[1fr_1fr_1fr_0.6fr] gap-5 items-center md:ring 
      md:ring-gray-300 md:shadow-lg md:px-10 py-6 rounded-full
      min-[768px]:max-[854px]:grid-cols-[0.8fr_0.6fr]!
      min-[768px]:max-[854px]:px-20! min-[768px]:max-[821px]:py-10!'>

        {/* min-[768px]:max-[821px]:grid-cols-[1fr_0.8fr_0.8fr]! */}
        {/* select car type */}
        {/* <div>
          <p className='flex gap-2 items-center'>
            <img src={ICONS.carColoured.src} alt={ICONS.carColoured.alt}
              className='w-4 h-5' />
            <span className='font-bold'>Select Your Car Type
              <span className='text-red-500'>*</span>
            </span>
          </p>
          <select name="select" id="select" required className='border mt-3 
          text-sm p-1 text-gray-500 outline-0 w-full md:w-auto'>
            <option defaultValue="select-your-car-type" className='text-gray-800'>Select your car type</option>
            <option value="bmw-5351" className='text-gray-800' >BMW 535i - 2010</option>
            <option value="bmw-x5" className='text-gray-800'>BMW X5 - 2015</option>
            <option value="changan" className='text-gray-800'>Changan CS95 - 2025</option>
            <option value="highlander" className='text-gray-800'>Toyota Highlander - 2010</option>
            <option value="honda" className='text-gray-800'>Honda CR-V - 2014</option>
            <option value="lexus-nt" className='text-gray-800'>Lexus NX 200T - 2016</option>
            <option value="lexus-rx" className='text-gray-800'>Lexus RX - 2009</option>
            <option value="mercedes" className='text-gray-800'>Mercedes-Benz G-Class - 2021</option>
            <option value="venza" className='text-gray-800'>Toyota Venza - 2013</option>
          </select>
        </div> */}

        {/* select pick-up location */}
        <div>
          <p className='flex gap-2 items-center'>
            <img src={ICONS.locationColoured.src} alt={ICONS.locationColoured.alt}
              className='w-4 h-4' />
            <span className='font-bold'>Pick-up Location
              <span className='text-red-500'>*</span>
            </span>
          </p>
          <select name="select" id="select" required className='border mt-3 
          text-sm p-1 text-gray-500 outline-0 w-full md:w-auto' 
          onChange={(e) => setSearch(e.target.value)}>
            <option defaultValue="" className='text-gray-800'>Select pick-up location</option>
            <option value="Abia" className='text-gray-800'>Abia</option>
            <option value="Ebonyi" className='text-gray-800'>Ebonyi</option>
            <option value="Imo" className='text-gray-800'>Imo</option>
            <option value="Lagos" className='text-gray-800'>Lagos</option>
            <option value="Abuja" className='text-gray-800'>Abuja</option>
            <option value="Oyo" className='text-gray-800'>Oyo</option>
          </select>
        </div>

        {/* select drop-off location */}
        {/* <div>
          <p className='flex gap-2 items-center'>
            <img src={ICONS.locationColoured.src} alt={ICONS.locationColoured.alt}
              className='w-4 h-4' />
            <span className='font-bold'>Drop-off Location
              <span className='text-red-500'>*</span>
            </span>
          </p>
          <select name="select" id="select" required className='border mt-3 
          text-sm p-1 text-gray-500 outline-0 w-full md:w-auto'>
            <option defaultValue="" className='text-gray-800'>Select drop-off location</option>
            <option value="abia" className='text-gray-800'>Abia</option>
            <option value="ebonyi" className='text-gray-800'>Ebonyi</option>
            <option value="imo" className='text-gray-800'>Imo</option>
            <option value="lagos" className='text-gray-800'>Lagos</option>
            <option value="abuja" className='text-gray-800'>Abuja</option>
            <option value="oyo" className='text-gray-800'>Oyo</option>
          </select>
        </div> */}

        {/* select pick-up date */}
        <div className='w-full'>
          <p className='flex gap-2 items-center'>
            <img src={ICONS.calenderColoured.src} alt={ICONS.calenderColoured.alt}
              className='w-4 h-4' />
            <span className='font-bold'>Pick-up Date
              <span className='text-red-500'>*</span>
            </span>
          </p>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
            wrapperClassName='w-full md:w-auto' className='border mt-3 text-sm p-1 text-gray-500
           outline-0 w-full md:w-auto'/>
        </div>

        {/* select drop-off date */}
        <div>
          <p className='flex gap-2 items-center'>
            <img src={ICONS.calenderColoured.src} alt={ICONS.calenderColoured.alt}
              className='w-4 h-4' />
            <span className='font-bold'>Drop-off Date
              <span className='text-red-500'>*</span>
            </span>
          </p>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
            wrapperClassName='w-full md:w-auto' className='border mt-3 text-sm 
          p-1 text-gray-500 outline-0 w-full md:w-auto'/>

        </div>

        {/* search button */}
        <div className=' '>
          <button className='p-2 py-3 w-full bg-blue-800 text-white
          md:mt-4.5 flex items-center justify-center gap-0.5'
            onClick={searchItem}
          >
            <BiSearch size={18} />Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Booking
