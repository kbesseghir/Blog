import React, { useEffect, useState } from 'react'
import BlogPage from '../components/BlogPage'

function Blog() {

 
  return (
    <div>
    <div className='text-white text-center py-40 bg-black px-4'>
      <h2 className='text-white text-5xl leading-snug lg:text-7xl font-bold mb-5'>Blog page</h2>

      </div>
      <div className='max-w-7xl mx-auto'>
      <BlogPage />
      </div>
      </div>
  )}

export default Blog;
