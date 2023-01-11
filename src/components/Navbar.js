import React from 'react'

const Navbar = () => {
  return (
    <div className='lg:px-[60px] sm:px-2 shadow absolute w-full bg-white'>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="p-2 mt-3 rounded-full shadow menu menu-compact dropdown-content bg-base-100 w-52">
      <li><a href="/">Home</a></li>
      <li><a>About</a></li>
      <li><a>Menu</a></li>  
      <li><a href="/booking">Reservation</a></li>
       
      </ul>
    </div>
    <a href="/"><p className="text-xl ">LITTLE LEMON WEBSITE</p></a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-2 menu menu-horizontal">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Menu</a></li>
      <li><a href="/booking">Reservation</a></li>
     
    
    </ul>
  </div>
  <div className="navbar-end">
    <a href="/booking"><button className="rounded-full btn ">order Online</button></a>
  </div>
</div>
    </div>
  )
}

export default Navbar