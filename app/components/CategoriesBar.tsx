"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { category } from '../utils/interfaces/interface';
import { MdKeyboardArrowDown } from "react-icons/md";
import CategoryLink from './CategoryLink';
import { groq } from 'next-sanity';

const CategoriesBar = () => {
  const [categories, setCategories] = useState<category[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
      const  getData = async () => {
        setIsLoading(true);
        const categories = await client.fetch<category[]>(groq`*[_type == "category"]{
          _id,
          name,
          description
        }`)
  
        setCategories(categories);
        setIsLoading(false);
      }
      getData();
    

  }, [])
  return (
    
    <div className=" bg-gray-100 text-xs lg:text-sm text-nowrap fixed top-16 w-full z-[100]">
      <div className="max-w-screen-2xl mx-auto flex py-3 font-bold px-4 lg:px-0">
      <p className="border-r pr-3 border-indigo-600 mr-4 flex items-center gap-2 cursor-pointer">All Categories <MdKeyboardArrowDown className='text-lg'/></p>
      <ul className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar">
        {
          isLoading ? 
          <p className='text-black'>Loading...</p> 
          :
          categories.map((route : any, index : any) => (
            <div key={index}>
              <CategoryLink route={route} index={index}/>
            </div>
          ))
        }
      </ul>
      </div>
    </div>  
  )
}

export default CategoriesBar
