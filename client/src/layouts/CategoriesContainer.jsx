import React from 'react'
import Categories from '../components/Categories'
import { categories } from '../data/data'



const CategoriesContainer = () => {
  return (
    <div className='flex p-5 justify-between' style={{height: "70vh"}}>
        {categories.map(item=>(
            <Categories key={item.id} item={item} />
        ))}
    </div>
  )
}

export default CategoriesContainer