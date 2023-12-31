import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook,FaTwitter ,FaDribbble, FaBars} from "react-icons/fa";

const Navbar = () => {
    const navItems =[
        {path:"/",link:"Home"},
        {path:"/blogs",link:"Blog"},
        {path:"/services",link:"Service"},
        {path:"/about",link:"About"},
        {path:"/contact",link:"Contact"},

    ]

  return (
   <header className='bg-black text-white fixed top-0 right-0 left-0'>
   <nav className='px-4 py-4 flex justify-between items-center max-w-7xl mx-auto' > 
   <a href='/' className=' text-xl text-white font-bold' >Design<span className='text-orange-500'>BK</span></a>
    <ul className='md:flex gap-12 text-lg hidden'>
    {navItems.map(({path,link})=>
        <li  className='text-white' key={path}>
        <NavLink to={path}>{link}</NavLink>
        </li>)}
    </ul>
    <div className='text-white lg:flex gap-4 hidden items-center'>
    <a  href='/' className='hover:text-orange-500'><FaFacebook /></a>
    <a  href='/' className='hover:text-orange-500'><FaTwitter /></a>
    <a  href='/' className='hover:text-orange-500'><FaDribbble /></a>
    <button className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline-orange duration-200 ease-in ">Log in</button>
    </div>
    <div className='md:hidden'><button><FaBars  className='w-5 h-5'/></button></div>
   </nav>
   </header>
  )
}

export default Navbar