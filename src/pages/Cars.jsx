import React, { useContext, useEffect, useState } from 'react'
import { ICONS } from "../assets/assets"
import { RentalContext } from '../Context/RentalContext'
import CarProductItem from "../components/CarProductItem";


const Cars = () => {
  const { cars, search, setSearch } = useContext(RentalContext);
  const [filteredCar, setFilteredCar] = useState([])
  const [sortType, setSortType] = useState('Relevant')

  const filterSearch = () => {
    let carsCopy = cars.slice();
    if (search) {
      carsCopy = carsCopy.filter((item) => {
        return (item.make.toLowerCase().includes(search.toLowerCase()) || item.model.toLowerCase().includes(search.toLowerCase())
          || item.fuelType.toLowerCase().includes(search.toLowerCase())) || item.engine.toLowerCase().includes(search.toLowerCase())
          || item.year.toLowerCase().includes(search.toLowerCase()) || item.transmission.toLowerCase().includes(search.toLowerCase())
          || item.location.toLowerCase().includes(search.toLowerCase()) || item.AC.toLowerCase().includes(search.toLowerCase())
      })
    }
    setFilteredCar(carsCopy)
  }
  

const totalCars = filteredCar.length

const SortPrices = () => {
  let filteredCarCopy = filteredCar.slice();
  switch (sortType) {
    case "Low to high":
      setFilteredCar(filteredCarCopy.sort((a, b) => a.price - b.price))
      break;
    case "High to low":
      setFilteredCar(filteredCarCopy.sort((a, b) => b.price - a.price));
      break;
    default:
      filterSearch()
  }
}
useEffect(() => {
  filterSearch()
}, [search])
useEffect(() => {
  totalCars;
}, [filteredCar])
useEffect(() => {
  SortPrices()
}, [sortType])

return (
  <section className='text-gray-800 flex flex-col'>
    <div className='bg-gray-800 p-2'>
      <div className='flex flex-col gap-10 items-center text-slate-100 my-10'>
        <div className='flex flex-col text-center md:items-center md:text-start gap-2'>
          <h2 className='text-3xl font-extrabold'>Available Cars</h2>
          <p className='font-medium'>Browse our selection of premium vehicles available for your
            next adventure
          </p>
        </div>

        <div className='ring ring-gray-700 shadow-xs shadow-gray-500
          w-full md:w-[75%] lg:w-[55%] flex items-center mx-auto px-3'>
          <img src={ICONS.search.src} alt={ICONS.search.alt} className='
          w-5 h-5'/>
          <input type="text" placeholder='Search by make, model, or features'
            className='w-75 px-3 py-3 md:py-2.5  flex-1 outline-0' value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <img src={ICONS.filterIcon.src} alt={ICONS.filterIcon.alt}
            className='w-5 h-5' />
        </div>
      </div>
    </div>
    <div className='flex flex-col py-5 xxs:px-10 md:px-15 lg:px-20 xl:px-30'>
      <div className='flex flex-col-reverse justify-between md:flex-row 
      md:items-center gap-2'>
        <select name="sort" id="sort" onChange={(e) => setSortType(e.target.value)}
          className='outline-0 py-1.5 px-1 md:py-1.5 border border-gray-800 w-[60%] md:w-auto'>
          <option value="Relevant">Sort by: Relevant</option>
          <option value="High to low">High to low</option>
          <option value="Low to high">Low to high</option>
        </select>
        <p >Showing {totalCars} cars available</p>
      </div>
      <div className='mt-5 grid md:grid-cols-[1fr_1fr_1fr] 
      min-[768px]:max-[854px]:grid-cols-[1fr_1fr]! gap-8'>
        {filteredCar.map((item, index) => {
          return <div key={index} className='ring ring-gray-100
            shadow-lg rounded-b-xl'>
            <CarProductItem id={item._id} name={item.name} make={item.make} model={item.model} year={item.year}
              transmission={item.transmission} fuelType={item.fuelType} engine={item.engine}
              location={item.location} image={item.image[0]} price={item.price} />
          </div>
        })}
      </div>
      {search && filteredCar.length <= 0 && (
          <p>Search is unavailable</p>
        )}
    </div>
  </section>
)

}

export default Cars
