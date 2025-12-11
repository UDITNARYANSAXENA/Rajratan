import React from 'react'
import HeroCarousel from '../components/Hero'
import AboutUs from '../components/Aboutus'
import ProductListWithImages from '../components/Products'
import ServiceComponent from '../components/Services'
import Testimonials from '../components/Testinomials'

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutUs/>  
      <ProductListWithImages/>
      <ServiceComponent/>
      <Testimonials />
    </div>
  )
}

export default Home
