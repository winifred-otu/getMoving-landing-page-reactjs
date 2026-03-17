import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='mt-30 mb-2 text-gray-800 grid gap-10 lg:gap-0 
    md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_0.7fr_0.9fr_1fr] 
    xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30'>
      <div className='flex flex-col gap-3 text-sm'>
        <p className='font-bold'>get<span className='font-extrabold'>
          Moving</span>
        </p>
        <p className='text-xs md:max-w-[80%] lg:max-w-auto'>We offer a big range of vehicles for your driving needs.
          We have the perfect car to meet your needs.
        </p>
        <div className='flex flex-col mt-2 text-xs'>
          <p className='flex items-center gap-3 font-semibold'>
            <FaPhone className='text-gray-800' />
            (234)-806-786-4567
          </p>
          <p className='flex items-center gap-3 font-semibold'>
            <FaEnvelope className='text-gray-800' />
            hello@getmoving.com
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='font-extrabold text-xs'>COMPANY</p>
        <ul className='flex flex-col gap-2 font-semibold text-xs'>
          <li>Careers</li>
          <li>Blog</li>
          <li>About</li>
          <li>How we work</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='font-extrabold text-xs'>WORKING HOURS</p>
        <div className='flex flex-col gap-2 font-semibold text-xs'>
          <p>
            Mon-Fri: 9:00AM - 9:00PM
          </p>
          <p>Sat: 9:00AM -10:00PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <div className='flex flex-col gap-3 md:max-w-[80%] lg:max-w-auto'>
        <p className='font-extrabold text-xs'>SUBSCRIPTION</p>
        <p className='font-semibold text-xs'>
          Subscribe your Email address for latest news & updates
        </p>
        <div className='flex flex-col gap-1 text-xs'>
          <input type="email" placeholder='Enter Email Address'
          className=' font-semibold py-2 pl-1 text-sm outline-0 ring
          ring-gray-200 shadow placeholder:text-xs placeholder:text-center'/>
          <button className='bg-blue-800 text-white text-xs w-full
          py-2 xxs:py-3'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
