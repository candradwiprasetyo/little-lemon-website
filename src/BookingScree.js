import React, { useState } from 'react'
import Navbar from './components/Navbar'

const BookingScree = () => {


  const [state,setState]=useState({
    name:"",
    email:"",
    phone:"",
    time:"",
    date:"",
    guestCount:"",



  })

  function handleChange(e){

    setState({
      ...state,
      [e.target.name]:e.target.value
  

    })


  }

  const handleSubmit =(e)=>{

    e.preventDefault()
    console.log(state)

    if(Object.values(state).some(x=>x ==="")){

      console.log("ggg")


    }

  }


  

  return (
    <div>
      
        <Navbar/>

        <form onSubmit={handleSubmit} >
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-lg font-bold py-5 ' >Table booking details</h1>
            <div className='flex justify-start flex-col'>

            <div className="form-control lg:w-[450px] mt-3 max-w-xs">
            <label className='text-start mb-2 font-semibold' >
        Name
    </label>
  
           <input name="name" onChange={handleChange}  type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
 
           </div>
           <div className="form-control lg:w-[450px] mt-3 max-w-xs">
           <label className='text-start mb-2 font-semibold' >
    Email
    </label>
  
        <input name="email"  onChange={handleChange} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />

        </div>
        <div className="form-control lg:w-[450px] mt-3 max-w-xs">
        <label className='text-start mb-2 font-semibold' >
        Guest count
    </label>
  
        <input onChange={handleChange}   name="guestCount"  type="number" placeholder="Guest count:" className="input input-bordered w-full max-w-xs" />

         </div>
         <div className="form-control lg:w-[450px] mt-3 max-w-xs">
         <label className='text-start mb-2 font-semibold' >
        Date
    </label>
  
  <input name="date"  onChange={handleChange}  type="date" placeholder="Phone no:" className="input input-bordered w-full max-w-xs" />

   </div>
   <div className="form-control lg:w-[450px] mt-3 max-w-xs">
         <label className='text-start mb-2 font-semibold' >
        Phone Number
    </label>
  
  <input  onChange={handleChange}  name="phone" type="text" placeholder="Phone no:" className="input input-bordered w-full max-w-xs" />

   </div>
   <div className="form-control lg:w-[450px] mt-3 max-w-xs">
    <label className='text-start mb-2 font-semibold' >
        Time
    </label>
  
  <input onChange={handleChange}  name="time" value={state.time} type="time" placeholder="Time:" className="input input-bordered w-full max-w-xs" />

   </div>

   <button className=' btn btn-base my-4'>
    Book now
   </button>


        </div>
        </div>
        </form>
    </div>
  )
}

export default BookingScree
