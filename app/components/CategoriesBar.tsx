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
    
    <div className=" bg-[#232F3E] text-white text-sm lg:text-sm text-nowrap  w-full z-[100] px-4 ">
      <div className="max-w-screen-2xl mx-auto flex py-3 font-bold px-4 lg:px-0">
      <p className="border-r pr-3 border-main mr-4 flex items-center gap-2 cursor-pointer">All Categories <MdKeyboardArrowDown className='text-lg -rotate-90'/></p>
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
