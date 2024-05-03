import React from 'react'
import { client } from '@/app/lib/sanity'
import { simplifiedProduct } from '../utils/interfaces/interface'
import ProductCard from '../components/ProductCard'

async function getData(category: string){
    const query = `*[_type == "product" && category->name == "${category}"] {
        name,
        price,
        stock,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url,
        "slug": slug.current,
        isOnSale
      }`

    const data = client.fetch(query);
    return data;
  }
  export default async function CategoryPage ({params} : {params : {category: string}}) {
  const data: simplifiedProduct[] = await getData(params.category);

  if(data.length < 1) return(<div className='font-bold text-2xl text-center'>Opps... Seems like all the products in this category are out of stock</div>)
  return (
    <div className='max-w-screen-2xl mx-auto pb-24 pt-12'>
      <h1 className='font-bold text-2xl my-4'>{params.category} Products</h1>
      <ul className='font-bold text-2xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-12 px-6'>
        {data.map((product, index) => (
          <li key={index}>
            <ProductCard product={product}  isOnSale={product.isOnSale}/>
          </li>
        ))}        
      </ul>
    </div>
  )
}

