import React from 'react'
import Hero from './components/Hero'
import { Item } from './components/Item'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'
import About from './components/About'  
import Footer from './components/Footer'  

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Item/>
        <Testimonial/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home