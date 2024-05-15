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
import ProductCard from './ProductCard'

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
            delay: 3000,
        }),
    ]} >
        <CarouselContent>
            {
                products.map((product, index) => (
                    <CarouselItem key={index} className={`basis-${params.flexBasis}`}><ProductCard product={product} isOnSale={product.isOnSale}/></CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselPrevious variant={"ghost"} className='hidden lg:block'/>
        <CarouselNext variant={"ghost"}  className='hidden lg:block'/>
    </Carousel>
    </div>
  )
}

export default ProductCategorySlider
