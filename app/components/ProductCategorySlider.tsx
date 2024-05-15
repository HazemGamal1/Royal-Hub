import React, { useEffect, useState } from 'react'
import { simplifiedProduct } from '../utils/interfaces/interface'
import { client } from '@/app/lib/sanity'
import { groq } from 'next-sanity'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import ProductCard from './ProductCard'
import category from '@/sanity/schemaTypes/category'
const ProductCategorySlider = (params: {category : string, flexBasis: string} ) => {
    const [products, setProducts] = useState<simplifiedProduct[]>([]);

    useEffect(() => {
        async function getData(category: string){
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
          }
          getData(params.category);
    })
  return (
    <div>
      <Carousel plugins={[
        Autoplay({
            delay: 8000,
        }),
    ]} >
        <CarouselContent className='cursor-grabbing5'>
            {
                products.map((product) => (
                    <CarouselItem className={`basis-1/2 lg:basis-${params.flexBasis}`}><ProductCard product={product} isOnSale={product.isOnSale}/></CarouselItem>
                ))
            }
            
        </CarouselContent>
    </Carousel>
    </div>
  )
}

export default ProductCategorySlider
