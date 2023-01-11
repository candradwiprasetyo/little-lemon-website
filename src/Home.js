import React from 'react'
import Hero from './components/Hero'
import { Item } from './components/Item'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Item/>
    </div>
  )
}

export default Home