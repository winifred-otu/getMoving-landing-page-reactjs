import React, { useState } from 'react'
import Title from './Title'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { HERO } from "../assets/assets"

const Faq = () => {
  const [isOpen, setIsOpen] = useState(1)
  return (
    <section className='mt-30 grid lg:grid-cols-[0.7fr_1.5fr_0.1fr] 
    items-center text-gray-800 xxs:px-10 xs:px-10 md:px-15 lg:px-11 xl:px-20
    '>
      <img src={HERO.faq.src} alt={HERO.faq.alt} className='w-100 h-30 hidden lg:grid' />

      {/* questions */}
      <div className='md:px-5 w-full'>
        <div className='flex flex-col items-center gap-5 mb-10 w-full md:w-auto'>
          <div>
            <Title subheading={'FAQ'} heading={'Frequently Asked Questions'} />
          </div>
          <p className='max-w-full lg:w-max-w-[90%] text-center'>Frequently asked questions about the car rental booking
            process on our website and answers to common concerns and
            inquiries.
          </p>
        </div>

        <div className='flex flex-col gap-5'>
          <div>
            <button className={`flex items-center justify-between px-4 py-3
            w-full outline-0 ${isOpen === 1 ? 'bg-blue-800 text-slate-100' : ''}`}
              onClick={() => setIsOpen(1)}>
              1. What is special about comparing rental car deals?
              {isOpen === 1 ? <IoIosArrowUp className='hidden sm:flex' /> 
              : <IoIosArrowDown className='hidden sm:flex'/>}
            </button>
            <p className={`py-2 px-4 ${isOpen === 1 ? "flex" : 'hidden'}`}>Comparing rental car deals is important as it helps find
              the best deal that fits your budget and requirements, ensuring
              you get the most value for your money. By comparing various options,
              you can find deals that offer lower prices, additional services, or
              better car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </p>
          </div>
          <div>
            <button className={`flex items-center justify-between px-4 py-3 
            w-full outline-0 ${isOpen === 2 ? 'bg-blue-800 text-slate-100' : ''}`}
              onClick={() => setIsOpen(2)}>
              2. How do i find the car rental deals?
              {isOpen === 2 ? <IoIosArrowUp className='hidden sm:flex' /> 
              : <IoIosArrowDown className='hidden sm:flex'/>}

            </button>
            <p className={`py-2 px-4 ${isOpen === 2 ? "flex" : "hidden"}`}>You can find car rental deals by researching online and
              comparing prices from different rental companies. Some car rental
              rental websites allow you to compare prices and view available
              rental options. It is also recommended to sign up for email
              newsletters and follow rental companies on social media to be informed
              of any special deals or promotions.
            </p>
          </div>
          <div>
            <button className={`flex items-center justify-between px-4 py-3 
            w-full outline-0 ${isOpen === 3 ? 'bg-blue-800 text-slate-100' : ''}`}
              onClick={() => setIsOpen(3)}>
              3. How do i find such low rental car prices?
              {isOpen === 3 ? <IoIosArrowUp className='hidden sm:flex' /> 
              : <IoIosArrowDown className='hidden sm:flex'/>}

            </button>
            <p className={`py-2 px-4 ${isOpen === 3 ? "flex" : "hidden"}`}>Book in advance. Booking your rental car ahead of time
              can often result in lower prices. Compare prices from multiple
              companies. Look for discount codes and coupons. Search for discount
              codes and coupons that you can use to lower the rental price.
              Renting from an off-airport location can sometimes result in lower prices.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Faq
