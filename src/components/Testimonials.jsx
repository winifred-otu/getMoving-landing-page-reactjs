import React, { useContext, useRef } from 'react'
import Title from './Title'
import { TESTIMONIALS, ICONS } from "../assets/assets"
import { FaQuoteRight } from 'react-icons/fa6'
import { RentalContext } from '../Context/RentalContext'

const Testimonials = () => {
  const {testimonialsRef} = useContext(RentalContext);
  const clientRef = useRef()

  let tx = 0;
  const mobileScren = window.innerWidth < 767;
  const desktopScreen = window.innerWidth > 767;
  const prevSlide = () => {
    if (mobileScren) {
      if (tx < 0) {
        tx += 25 //25
      } 
    }
    if(desktopScreen){
      if(tx < 0) {
        tx += 50
      }
    }
    

    clientRef.current.style.transform = `translateX(${tx}%)`
  }
  const nextSlide = () => {
    
    if (mobileScren) {
      if (tx > -75) {
        tx -= 25; //-25

      } 
    }
    if(desktopScreen){
       if (tx > -50) {
        tx -= 50; //-25

      } 
    }

    clientRef.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <section ref={testimonialsRef} className='mt-30 text-gray-800 
    xxs:px-10 xs:px-15 md:px-15 lg:px-20 xl:px-30'>
      <div className=' flex flex-col items-center mb-20'>
        <div className='mb-5'>
          <Title subheading={'Reviewed by People'}
            heading={"Client's Testimonials"} />
        </div>
        <p className='max-w-full md:max-w-[90%] text-center'>Discover the positive impact we've made on our clients by
          reading through their testimonials. Our clients have experienced
          our services and results, and they are eager to share their positive
          experiences with you.
        </p>
      </div>

      {/* testimonies */}
      <div className='relative px-10 min-[819px]:max-[854px]:px-15! 
      md:px-18 lg:px-40'>
        {/* navigators */}
        <img src={ICONS.backArrowIcon.src} alt={ICONS.backArrowIcon.alt} onClick={prevSlide}
          className='absolute translate-y-[-50%] top-[50%] right-auto left-0 w-8' />
        <img src={ICONS.arrowIcon.src} alt={ICONS.arrowIcon.alt} onClick={nextSlide}
          className='absolute translate-y-[-50%] top-[50%] right-0 w-8' />

        <div className='overflow-hidden '>
          <div className='flex w-[400%] md:w-[200%] overflow-x-hidden' ref={clientRef}>
            {/* 1 */}
            <div className='w-full md:w-[50%] xxs:px-2 xs:px-5 md:pl-2 lg:pl-0 md:pr-5 md:px-0 xl:pr-10'>
              <div className=' flex flex-col gap-5'>
                <p className='font-semibold text-center md:text-start lg:max-w-[90%]'>
                  "We rented a car from this website and had an amazing experience!
                  The booking was easy and the rental rates were very affordable."
                </p>
                <div className='flex gap-16 items-center '>
                  <div className='flex gap-3'>
                    <img src={TESTIMONIALS.customer4.src} alt={TESTIMONIALS.customer4.alt}
                      className='w-14 h-14 rounded-full' />
                    <div>
                      <p className='text-sm font-bold'>Ngozi Anyanwu</p>
                      <p className='text-sm'>Diplomat</p>
                    </div>
                  </div>
                  <FaQuoteRight size={30} className='text-blue-800' />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className='w-full md:w-[50%] xxs:px-2 xs:px-5 md:px-5  md:pl-15'>
              <div className=' flex flex-col gap-5'>
                <p className='font-semibold text-center md:text-start lg:max-w-[90%]'>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className='flex gap-16 items-center'>
                  <div className='flex gap-3'>
                    <img src={TESTIMONIALS.customer1.src} alt={TESTIMONIALS.customer1.alt}
                      className='w-14 h-14 rounded-full' />
                    <div>
                      <p className='text-sm font-bold'>Odogwu Emezie</p>
                      <p className='text-sm'>Sailor</p>
                    </div>
                  </div>
                  <FaQuoteRight size={30} className='text-blue-800' />
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className='w-full md:w-[50%] xxs:px-2 xs:px-5 md:px-2 md:pr-11'>
              <div className=' flex flex-col gap-5'>
                <p className='font-semibold text-center md:text-start lg:max-w-[90%]'>
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </p>
                <div className='flex gap-16 items-center'>
                  <div className='flex gap-3'>
                    <img src={TESTIMONIALS.customer3.src} alt={TESTIMONIALS.customer3.alt}
                      className='w-14 h-14 rounded-full' />
                    <div>
                      <p className='text-sm font-bold'>Veronica Cheqs</p>
                      <p className='text-sm'>Musician</p>
                    </div>
                  </div>
                  <FaQuoteRight size={30} className='text-blue-800' />
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className='w-full xxs:px-2 xs:px-5 md:w-[50%] md:px-0 md:pl-7 xl:pl-10'>
              <div className='flex flex-col gap-5'>
                <p className='font-semibold text-center md:text-start lg:max-w-[90%]'>
                  "We rented a car from this website and had an amazing experience!
                  The booking was easy and the rental rates were very affordable."
                </p>
                <div className='flex gap-16 items-center'>
                  <div className='flex gap-3'>
                    <img src={TESTIMONIALS.customer2.src} alt={TESTIMONIALS.customer2.alt}
                      className='w-14 h-14 rounded-full' />
                    <div>
                      <p className='text-sm font-bold'>Uncle Durotimi</p>
                      <p className='text-sm'>Veteran</p>
                    </div>
                  </div>
                  <FaQuoteRight size={30} className='text-blue-800' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonials
