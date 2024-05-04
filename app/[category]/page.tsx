"use client"
import { client } from '@/app/lib/sanity'
import { simplifiedProduct } from '../utils/interfaces/interface'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { Grid } from 'react-loader-spinner'
import FullPageLoader from '../components/FullPageLoader'

  export default function CategoryPage ({params} : {params : {category: string}}) {
    const [products, setProducts] = useState<simplifiedProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      async function getData(category: string){
        setIsLoading(true);
        const products = await client.fetch<simplifiedProduct[]>(groq`*[_type == "product" && category->name == "${category}"] {
          name,
          price,
          stock,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url,
          "slug": slug.current,
          isOnSale
        }`)
        setProducts(products);
        setIsLoading(false);
      }
      getData(params.category);
    }, [])
  
  return (
    <div>
      {isLoading &&
        <FullPageLoader />
      }
      <div className='max-w-screen-2xl mx-auto pb-24 pt-12 my-32'>
        <h1 className='font-bold text-2xl my-4'>{params.category} Products</h1>
        <ul className='font-bold text-2xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-12 px-6'>
          {products.map((product, index) => (
            <li key={index}>
              <ProductCard product={product}  isOnSale={product.isOnSale}/>
            </li>
          ))}        
        </ul>
      </div>
    </div>
    
  )
}

