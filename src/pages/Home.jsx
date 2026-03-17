import React from 'react'

import Hero from "../components/Hero";
import BookSearch from "../components/BookSearch";
import HowTo from "../components/HowTo";
import RentalFleet from "../components/RentalFleet"
import WhyUs from "../components/WhyUs"
import Testimonials from "../components/Testimonials"
import Faq from "../components/Faq"

const Home = () => {
  return (
    <div>
      <Hero />
      <BookSearch />
      <HowTo />
      <RentalFleet />
      <WhyUs />
      <Testimonials />
      <Faq />
    </div>
  )
}

export default Home
