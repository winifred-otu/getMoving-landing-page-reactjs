import React from 'react'
import { HERO } from "../assets/assets"
// import carImage from '../../public/car_image4.png'

const About = () => {
  return (
    <section className='flex flex-col gap-5 text-gray-800'>
      <div className='relative'>
        <div className=' w-full md:h-105 h-80' >
          <img src={HERO.carImage1.src} alt={HERO.carImage1.alt}
            className='h-full w-full ' />
        </div>
        <h2 className='absolute top-0 left-0 right-0 font-medium 
        text-4xl text-slate-200 grayscale-200 bg-gray-800 px-6 pb-4
        pt-2 text-center'>
          About Us
        </h2>
      </div>
      <div className='xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30
      flex flex-col gap-5 items-center md:text-center text-start'>
        <h2 className='font-md text-2xl'>Who we are</h2>
        <div>
          <p>
            We offer a big range of vehicles for your driving needs.
            We have the perfect car to meet your needs.
            Discover the best deals you'll ever find with our unbeatable
            offers. We're dedicated to providing you with the best value for
            your money. so you can enjoy top quality services and products
            without breaking the bank. Our deals are designed to give you
            the ultimate renting experience. so don't miss out on your chance
            to save big.
          </p>
          <p>We're dedicated to providing you with the best value for
            your money.
          </p>
        </div>   
      </div>
    </section>
  )
}

export default About
