import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ICONS } from "../assets/assets"
import { RentalContext } from '../Context/RentalContext'

const CarProductItem = ({ id, image, name, make, model, price, transmission, year, fuelType, engine, location }) => {
    const { currency } = useContext(RentalContext)
    return (
        <Link to={`/car/${id}`} className={''}>
            <div className='relative text-gray-800 group hover:-translate-y-1
             transition-all duration-500 cursor-pointer'>
                <div className='transition-transform duration-500 group-hover:scale-103'>
                    <img src={image} alt={name} className='w-full h-50 
                  rounded-t-lg ' />
                    <div className='absolute top-0'>
                        <p className='m-3 px-2 py-1 bg-blue-700 text-slate-100 text-xs
                    rounded-full font-bold'>
                            Available Now
                        </p>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <p className='m-3 px-4 py-2 bg-gray-800 text-slate-100
                    text-sm font-bold'>
                            {currency}{price} /day
                        </p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col gap-3 px-4 py-3.5 '>
                <div className=''>
                    <p className='font-extrabold'>{make} {model}</p>
                    <p className='font-medium'>{year}</p>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <p className='text-sm font-medium gap-2 flex items-center'>
                        <img src={ICONS.car1.src} alt={ICONS.car1.alt}
                            className='w-4 h-4' />
                        {transmission}
                    </p>
                    <p className='text-sm font-medium gap-2 flex items-center'>
                        <img src={ICONS.fuelIcon.src} alt={ICONS.fuelIcon.alt}
                            className='w-4 h-4' />
                        {fuelType}
                    </p>
                    <p className='text-sm font-medium gap-2 flex items-center'>
                        <img src={ICONS.car1.src} alt={ICONS.car1.alt}
                            className='w-4 h-4' />
                        {engine}
                    </p>
                    <p className='text-sm font-medium gap-2 flex items-center'>
                        <img src={ICONS.location.src} alt={ICONS.location.alt}
                            className='w-3 h-4' />
                        {location}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CarProductItem
