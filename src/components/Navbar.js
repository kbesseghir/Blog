import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navItems =[
        {path:"/",link:"Home"},
        {path:"/blogs",link:"Blog"},
        {path:"/services",link:"Service"},
        {path:"/about",link:"About"},
        {path:"/contact",link:"Contact"},

    ]

  return (
   <header className='bg-black'>
   <nav className='px-4 py-4'> 
   <a href='/' className=' text-xl text-white font-bold' >Design<span className='text-orange-500'>BK</span></a>
    <ul className='md:flex gap-12 text-lg'>
    {navItems.map(({path,link})=>
        <li  className='text-white' key={path}>
        <NavLink to={path}>{link}</NavLink>
        </li>)}
    </ul>
   </nav>
   </header>
  )
}

export default Navbar