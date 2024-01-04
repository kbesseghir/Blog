import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Pagination from './Pagination'
import CategorySel from './ CategorySel'
import Sidebar from './Sidebar'

const BlogPage = () => {
    const  [blogs,setBlogs] = useState([])
    const  [selectedCategory,setSelectedCategory] = useState(null)
    const pageSize=12
    const [currentPage,setCurrentPage] = useState(1)
    const [activeCategory,setActiveCategory] =useState(null)
    
    let url = `http://localhost:5000/blogs?pages=${currentPage}&limit=${pageSize}`
    useEffect(()=>
    {
      async function fetchData(){
        if (selectedCategory){
            url+=`&category=${selectedCategory}`;
        }
        const response = await fetch(url)
        const data = await response.json()
        setBlogs(data)
      }
  
  fetchData()
  
    },[currentPage,pageSize,selectedCategory])

    const handelPageChange = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const handelCategoryChange = (category)=>{
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    } 
   
  return (
    <div>
    <div>
    <CategorySel onSelectCategory={handelCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>

    <div className='flex flex-col lg:flex-row gap-10'>
    <BlogCard blogs ={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
    <div className=" p-4 rounded-lg shadow-lg w-85"><Sidebar /></div>
    </div>

    <div> <Pagination  onPageChange={handelPageChange} blogs ={blogs} currentPage={currentPage} pageSize={pageSize}/></div>
    
    </div>
  )
}

export default BlogPage