"use client"
import { client } from '@/app/lib/sanity'
import { simplifiedProduct } from '../utils/interfaces/interface'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import FullPageLoader from '../components/FullPageLoader'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import useLoading from '../store/useLoading'

  export default function CategoryPage ({params} : {params : {category: string}}) {
    const [products, setProducts] = useState<simplifiedProduct[]>([]);
    const {setIsLoading} = useLoading();
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
      <div className=''>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{params.category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className='font-bold text-2xl my-6'>{params.category} Products</h1>
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

