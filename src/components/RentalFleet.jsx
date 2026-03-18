import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { RentalContext } from '../Context/RentalContext'



const RentalFleet = () => {
  const { cars, currency } = useContext(RentalContext)
  const [image, setImage] = useState()
  const [carData, setCarData] = useState(false)
  const [activeItem, setActiveItem] = useState(false)

  const fetchDefaultImage = () => {
    if (cars && cars.length > 0) { // prevents error if the array is undefined or empty
      // const carImage = cars[0]; //it also works if you don't want to use find()
      const carImage = cars.find(item => item.image && item.image.length > 0); // use find instead of mapping the whole array because you want to display the first item (image) that matches the condition
      if (carImage) {
        setCarData(carImage);
        setImage(carImage.image[0])

      }
    }
  }

  useEffect(() => {
    fetchDefaultImage()
  }, [cars])

  return (
    <section className='mt-30 text-gray-800 
    xxs:px-10 xs:px-10 md:px-15 lg:px-20 xl:px-30'>
      <div className='mb-10 flex flex-col gap-2 '>
        <Title subheading={'Our Cars'} heading={'Our rental fleet'} />
        <div className='flex justify-center'>
          <p className=' w-full md:w-[45%] text-center'>Choose from a variety of our amazing vehicles to rent for your
            next adventure or business trip
          </p>
        </div>
      </div>


      <div className='grid gap-10 md:grid-cols-[195px_1fr_185px]
      transition-all duration-500 
      lg:grid-cols-[240px_1fr_220px] xl:grid-cols-[300px_1fr_250px] md:gap-0'>
        {/* leftside- car name */}
        <div className=' h-95  overflow-y-scroll scrollbar-hide' >
          <div>
            <ul className='flex flex-col p-3 gap-1'>
              {cars.map((car, index) => {
                return <li key={index} onClick={() => (setImage(car.image[0]),
                  setCarData(car), setActiveItem(index))} className={`font-bold hover:bg-blue-800 px-2 py-3 text-md
                hover:text-white ${activeItem === index ? "bg-blue-800 text-white" : ''}`}>{car.name}</li>
              })}
            </ul>
          </div>

        </div>
        {/* middle - car image */}
        <div className='w-full h-80 md:w-11/12 lg:w-[80%] md:mx-auto
        transition-all duration-500 '>
          <img src={image} alt={carData.name} className='h-full w-full' />
        </div>
        {/* rightside - car details */}
        <div className='flex flex-col'>
          <div className='border border-gray-800 '>
            <p className='py-2 px-4 bg-blue-800 text-white w-full'><span className='font-bold text-lg'>{currency}{carData.price}</span> / rent per day</p>

            <p className='flex justify-between items-center text-center py-2 border-b border-gray-800 font-semibold text-sm'><span className=' inline-block  w-2/5'>
              Model</span> |<span className=' inline-block  w-2/5 md:pr-1'>{carData.model}
              </span></p>
            <p className='flex justify-between items-center text-center py-2 border-b border-gray-800 font-semibold text-sm'><span className=' inline-block  w-2/5'>
              Make</span> | <span className=' inline-block  w-2/5'>{carData.make}</span></p>
            <p className='flex justify-between items-center text-center py-2 border-b border-gray-800 font-semibold text-sm'><span className=' inline-block  w-2/5'>
              Year</span> | <span className=' inline-block  w-2/5'>{carData.year}
              </span></p>
            <p className='flex justify-between items-center text-center py-2 border-b border-gray-800 font-semibold text-sm'><span className=' inline-block  w-2/5'>
              Engine</span> | <span className=' inline-block  w-2/5'>{carData.engine}
              </span></p>
            <p className='flex justify-between items-center text-center py-2 border-b border-gray-800 font-semibold text-sm'><span className=' inline-block  w-2/5'>
              AC</span> | <span className=' inline-block  w-2/5'>{carData.AC}
              </span></p>
            <p className='flex justify-between items-center text-center py-2 border-b border-gray-800 font-semibold text-sm md:pl-1'><span className=' inline-block  w-2/5'>
              Transmission</span> | <span className=' inline-block  w-2/5'>{carData.transmission}
              </span></p>
            <p className='flex justify-between items-center text-center py-2 font-semibold text-sm'><span className=' inline-block  w-2/5'>
              Fuel Type</span> | <span className=' inline-block  w-2/5'>{carData.fuelType}
              </span></p>
          </div>

          <button className='py-2.5 px-4 text-center w-full border mt-3 bg-blue-800
          text-white text-sm font-medium'>
            RESERVE NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default RentalFleet
