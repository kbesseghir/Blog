import React from 'react'

const  CategorySel = ({onSelectCategory ,selectedCategory, activeCategory}) => {
    const categories = ["Health","Fintech","Startups","AI","Tech"]
  return (
    <div className="flex space-x-4 p-4">
    <button
      className={`px-4 py-2 rounded-full ${
        activeCategory === "All" ? "bg-orange-600 text-white" : "bg-gray-300"
      }`}
      onClick={() => onSelectCategory(null)}
    >
      All
    </button>
    {categories.map((category) => (
      <button
        key={category}
        className={`px-4 py-2 rounded-full ${
          activeCategory === category ? "bg-orange-600 text-white" : "bg-gray-300"
        }`}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    ))}
  </div> )
}

export default  CategorySel