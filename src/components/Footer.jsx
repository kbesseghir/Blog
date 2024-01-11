import React from 'react'
import { FaFacebook,FaTwitter ,FaDribbble, FaBars} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
    
    <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
    <div className='grid mb-8 lg:grid-cols-6'>


    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
    <div>
    <p className='font-medium tracking-wide text-gray-300'> Category</p>
    <ul className='mt-2 space-y-2'>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>world</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Refernces</a></li>
    </ul>
    
    </div>
    <div>
    <p className='font-medium tracking-wide text-gray-300'> Apps</p>
    <ul className='mt-2 space-y-2'>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a></li>
    </ul>
    
    </div>
    <div>
    <p className='font-medium tracking-wide text-gray-300'> Cherry</p>
    <ul className='mt-2 space-y-2'>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>NonProfit</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a></li>
    </ul>
    
    </div>
    <div>
    <p className='font-medium tracking-wide text-gray-300'> Business</p>
    <ul className='mt-2 space-y-2'>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infopreneur</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a></li>
    <li>
    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>projects</a></li>
    </ul>
    
    </div>
   
    </div>

    <div className='col-span-4 lg:col-span-2'>
            <h2 className='text-lg font-semibold mb-4 '>Subscribe for Updates</h2>
            <form className='max-w-sm mx-auto'>
              <div className='flex items-center'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='flex-grow py-2 px-4 mr-2 rounded-l-md  text-black focus:outline-none'
                />
                <button
                  type='submit'
                  className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-r-md transition duration-300 focus:outline-none'
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
         

    </div>
    <div className='col-span-4 lg:col-span-4 flex pb-4 flex-col lg:flex-row items-center justify-between mt-8'>
            <div className='text-center lg:text-left text-gray-500 text-sm lg:mt-0 mb-4 lg:mb-0'>
              <p>&copy; 2024 Your Website. All Rights Reserved.</p>
            </div>
            <div className='flex justify-center space-x-4'>
              <a href='#' className='text-gray-500 hover:text-orange-500 transition duration-300'>
                <FaFacebook  size={24} />
              </a>
              <a href='#' className='text-gray-500 hover:text-orange-500 transition duration-300'>
                <FaTwitter size={24}  />
              </a>
              <a href='#' className='text-gray-500 hover:text-orange-500 transition duration-300'>
                <FaDribbble  size={24} />
              </a>
            </div>
          </div>
    </div></div>
  )
}

export default Footer