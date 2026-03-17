import React from 'react'
import { HERO } from '../assets/assets' 
import { RiVerifiedBadgeLine } from 'react-icons/ri'
import { RiHandCoinLine } from 'react-icons/ri'
import { RiHomeGearLine } from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io'


const WhyUs = () => {
  return (
    <section className='mt-30 text-gray-800 
    '>
      {/* why us title */}
      <div className='bg-gray-900 px-5 py-10 md:px-10 md:py-10 flex flex-col gap-5 
      md:gap-2 items-center text-center md:text-start '>
        <h2 className='text-4xl font-bold text-slate-100'>
          Save big with our cheap car rental!
        </h2>
        <p className='text-slate-100'>Top Airports Local Suppliers.
          <span className='text-blue-500'> 24/7</span> Support.
        </p>
      </div>
      {/* why us image */}
      <div className='flex flex-col items-center text-center mt-20
       xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30'>
        <img src={HERO.subHero2.src} alt={HERO.subHero2.alt} className='
        xxs:w-[80%] md:w-2/4 ' />
      </div>
      {/* why us text */}

      <div className='mt-10 grid md:grid-cols-[0.9fr_0.8fr] gap-20 lg:gap-30
      min-[768px]:max-[821px]:grid-cols-[1fr_0.85fr]! 
      xxs:px-10 xs:px-15 md:px-15 lg:px-20 xl:px-30'>
        {/* leftside reasons to choose us */}
        <div>
          <div className='flex flex-col items-center gap-1 text-gray-800
          md:items-start'>
            <h3 className='text-lg font-extrabold text-center md:text-start'>Why Choose Us</h3>
            <h1 className=' max-w-full md:max-w-full xl:max-w-[90%]
            text-center md:w-auto 
            md:text-start text-3xl font-extrabold'>
              Best valued deals you will ever find
            </h1>
          </div>
          <div className='mt-5 flex flex-col items-center md:items-start '>
            <p className='text-md leading-6 mb-5 text-center md:text-start'>
              Discover the best deals you'll ever find with our unbeatable offers.
              We're dedicated to providing you with the best value for your money. so
              you can enjoy top quality services and products without breaking the bank.
              Our deals are designed to give you the ultimate renting experience. so
              don't miss out on your chance to save big.
            </p>
            <button className='py-3.5 px-6 bg-blue-800 text-white
            flex items-center gap-2 text-sm '>
              Find Details
              <IoIosArrowForward size={14}/>
              </button>
          </div>
        </div>
        {/* rightside reasons to choose use */}
        <div className='flex flex-col gap-5'>
          {/* 1 */}
          <div className='flex flex-col md:flex-row gap-5 items-center md:items-start'>
            <div className='text-blue-800'>< RiVerifiedBadgeLine size={40} /></div>
            <div className='text-center md:text-start'>
              <h3 className='font-extrabold'>Verified Cars</h3>
              <p className=''>We carry several checks on a car to ensure a consistent standard
                is maintained. They cover car condition and documentation.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='flex flex-col md:flex-row gap-5 items-center md:items-start'>
            <div className='text-blue-800'><RiHandCoinLine size={40} /></div>
            <div className='text-center md:text-start'>
              <h3 className='font-extrabold'>No Hidden Charges</h3>
              <p className=''>Enjoy peace of mind with our no hidden charges policy. We believe
                in transparent and honest pricings.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='flex flex-col md:flex-row gap-5 items-center md:items-start'>
            <div className='text-blue-800'><RiHomeGearLine size={40} /></div>
            <div className='text-center md:text-start'>
              <h3 className='font-extrabold'>Great Maintenance Contract</h3>
              <p className=''>We have a network of professional maintenance hubs that will help you keep
                a history of your services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
