import React from 'react'
import Title from './Title'
import { MdSupportAgent } from 'react-icons/md'
import { RiPhoneLine } from 'react-icons/ri'
import { RiCarLine } from 'react-icons/ri'
import { RiTruckLine } from 'react-icons/ri'
import { MdCarRental } from 'react-icons/md'
import { IoCarSport } from 'react-icons/io5'

const HowTo = () => {
  return (
    <section className='mt-30 xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30
     '>
      <div className='mb-20'>
        <Title subheading={'Plan your trip now'} heading={'Quick &, easy car rental'} />
      </div>
      
      <div className='flex flex-col md:flex-row items-center justify-between'>

        <div className='flex flex-col w-full md:w-[28%] gap-2 items-center text-center'>
          <span className='flex h-30 w-30 rounded-full text-center items-center justify-center bg-slate-200'>
            <MdCarRental className='text-blue-800 mb-7' size={70} />
          </span>
          
          <p className='text-lg font-bold'>Select Car</p>
          <p>We offer a big range of vehicles for all your driving needs.
            We have the perfect car to meet your needs.
          </p>
        </div>

        <div className='flex flex-col w-full md:w-[28%] gap-2 items-center text-center'>
          <span className='flex h-30 w-30 rounded-full text-center items-center justify-center bg-slate-200'>
            <MdSupportAgent className='text-blue-800 mb-7' size={70} />
          </span>
          <p className='text-lg font-bold'>Contact Operator</p>
          <p>Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns.
          </p>
        </div>
        <div className='flex flex-col w-full md:w-[28%] gap-2 items-center text-center'>
          <span className='flex h-30 w-30 rounded-full text-center items-center justify-center bg-slate-200'>
            <RiTruckLine className='text-blue-800 mb-7' size={70} />
          </span>
          <p className='text-lg font-bold'>Let's Drive</p>
          <p>Whether you are hitting the open road, we've got you covered
            with our wide range of cars.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowTo
