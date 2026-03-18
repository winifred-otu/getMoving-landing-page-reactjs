import React from 'react'
import {HERO} from "../assets/assets"
import { useContext } from 'react'
import { RentalContext } from '../Context/RentalContext'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'

const Hero = () => {
const {navigate} = useContext(RentalContext)
  return (
      <div className='mt-20 md:mt-25 text-center md:text-start 
      xxs:px-10 xs:px-15 md:px-15 lg:px-20 xl:px-30
      md:grid xl:grid-cols-[520px_1fr] lg:grid-cols-[400px_1fr]
      md:grid-cols-[320px_1.2fr] '>
      <div className='w-full '>
        <p className=' xl:text-xl font-extrabold text-lg leading-10 
        text-gray-800'>
          Plan your trip now
        </p>
        <h1 className=' w-full lg:max-w-[80%] xl:max-w-[80%] xl:text-5xl 
          xxs:text-5xl xs:text-5xl md:text-5xl font-extrabold 
          text-gray-800 animate-fade-in'>
          Save <span className='text-blue-800 inline-block 
          motion-safe:animate-wiggle'>big</span> with 
          our car rental
        </h1>
        <p className='w-full md:max-w-full lg:max-w-full xl:max-w-[90%] 
          xl:text-lg text-sm mt-4'>
          Rent the car of your dreams, unbeatable prices, unlimited miles,
          flexible pick-up options and much more
        </p>
        <div className='flex flex-col sm:flex-row xl:text-lg md:mt-8 gap-3 mt-4 text-sm'>
          <button className='border py-3.5 px-7 bg-blue-800 text-slate-100
            transition-all duration-500 hover:scale-103 active:opacity-70
            flex items-center gap-1 justify-center'
            onClick={() => navigate('/cars')}>
            Book Now <FaCheckCircle size={15} />
          </button>
          <button className='border py-3.5 px-7 bg-gray-800 text-slate-100
            transition-all duration-500 hover:scale-103 active:opacity-70
             flex items-center gap-1 justify-center'>
            Learn More <IoIosArrowForward size={14}/>
          </button>
        </div>
      </div>
      <img src={HERO.bannerFlip.src} alt={HERO.bannerFlip.alt} className='w-full h-full
      hidden sm:block animate-scale-up'/>
    </div>
  )
}

export default Hero
