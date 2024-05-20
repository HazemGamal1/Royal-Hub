"use client"
import { client } from '@/app/lib/sanity'
import { simplifiedProduct } from '../../utils/interfaces/interface'
import ProductCard from '../../components/ProductCard'
import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import useLoading from '../../store/useLoading'

  export default function CategoryPage ({params} : {params : {category: string}}) {
    const [products, setProducts] = useState<simplifiedProduct[]>([]);
    const {setIsLoading} = useLoading();
    let finalString = "";
    if(params.category.includes("%20")){
      const substringToRemove = "%20";
      const startIdx = params.category.indexOf(substringToRemove);
      const endIndx = startIdx + substringToRemove.length;
      finalString = params.category.substring(0, startIdx) + " " +  params.category.substring(endIndx);
    }else{
      finalString = params.category;
    }
    
    // useEffect(() => {
    //   async function getData(category: string){
    //     setIsLoading(true);
    //     const products = await client.fetch<simplifiedProduct[]>(groq`*[_type == "product" && category->name == "${category}"] {
    //       name,
    //       price,
    //       stock,
    //       "categoryName": category->name,
    //       "imageUrl": images[0].asset->url,
    //       "slug": slug.current,
    //       isOnSale
    //     }`)
    //     setProducts(products);
    //     setIsLoading(false);
    //   }
    //   getData(finalString);
    // }, [])
  
  return (
    <div>
      <div className='px-4 lg:px-0'>
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
                <BreadcrumbPage>{finalString}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className='font-bold text-2xl my-6'>{finalString} Products</h1>
        <ul className='font-bold text-2xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8 px-6'>
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

