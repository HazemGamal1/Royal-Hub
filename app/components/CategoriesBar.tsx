import React from 'react'
import { client } from '../lib/sanity'
import { category } from '../utils/interfaces/interface';
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import CategoryLink from './CategoryLink';

async function getData(){
  const query = `*[_type == "category"]{
    name,
    description
  }`
  const data = client.fetch(query);
  return data;
}
const CategoriesBar = async () => {
  const data : category[] = await getData();
  return (
    <div className=" bg-gray-100 text-xs lg:text-sm text-nowrap">
      <div className="max-w-screen-2xl mx-auto flex py-3 font-bold px-4 lg:px-0">
      <p className="border-r pr-3 border-indigo-600 mr-4 flex items-center gap-2 cursor-pointer">All Categories <MdKeyboardArrowDown className='text-lg'/></p>
      <ul className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar">
          {data.map((route : any, index : any) => (
            <CategoryLink route={route} index={index}/>
          ))}
      </ul>
      </div>
    </div>  
  )
}

export default CategoriesBar
