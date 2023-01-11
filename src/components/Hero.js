import React from 'react'
import { useNavigate } from 'react-router'

const Hero = () => {
  
   const nav= useNavigate()

  return (
<div>
    <div className="pt-24 pb-10 bg-yellow-100 hero min-h-700">
  <div className="hero-content flex-col lg:flex-row lg:px-[100px] px-[40px]   ">
   
    <div className='flex flex-col items-start '>
      <h1 className="text-5xl font-bold ">LITTLE LEMON WEBSITE</h1>
      <p className='text-2xl font-bold'>JOHN DOE</p>
      <p className="py-6 text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button onClick={()=>nav("/booking")} className="px-6 rounded-full btn btn-base">Book Table</button>
    </div>
    <img src="https://cdn.pixabay.com/photo/2022/05/22/13/21/healthy-7213383_960_720.jpg" className="max-w-sm h-[500px] rounded-lg shadow-2xl" />
  </div>
</div>
    </div>
  )
}

export default Hero