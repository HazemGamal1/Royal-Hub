"use client"
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import CategoriesBar from "../components/CategoriesBar";
import { client } from "../lib/sanity";
import heroImg from '@/public/hero.png'
import { simplifiedProduct } from "../utils/interfaces/interface";
import ProductCard from "../components/ProductCard";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { Grid } from 'react-loader-spinner'
import FullPageLoader from "../components/FullPageLoader";
import Slider from "../components/Slider";
import Image from "next/image";
import sale from '@/public/FLASHSALE1170x60EN.png'
import useLoading from "../store/useLoading";
export default function Homepage() {
  const [products, setProducts] = useState<simplifiedProduct[]>([]);
  const {isLoading, setIsLoading} = useLoading();
  useEffect(() => {
    async function getData(){
      setIsLoading(true);
      const products = await client.fetch<simplifiedProduct[]>(groq`*[_type == "product"]{
        name,
        price,
        stock,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url,
        "slug": slug.current,
        isOnSale
      }`);
      setProducts(products);
      setIsLoading(false);
    }

    getData();
  }, [])

  return (
    <>
    
        <main  className="flex flex-col justify-between min-h-screen ">
          {
            isLoading &&
            <FullPageLoader /> 
          }
          <div>
            
              {/* <Image src={heroImg} priority alt="hero image" className="absolute animate-pulse -z-10 object-contain object-top top-10 lg:top-10 w-full h-full"/> */}
              <div className="bg-[#FF9901] ">
                <Image src={sale} alt="sale image" width={1100} priority quality={100} className="object-contain object-center mx-auto"/>
              </div>
              <Navbar />
              <div className="lg:mt-12 lg:max-w-screen-xl lg:mx-auto">
                {/* <Hero /> */}
              </div>
            <div className="max-w-screen-2xl mx-auto">
              <div className="w-full mx-auto lg:w-full">
                <Slider />
              </div>
              {/* <div className="w-full max-w-screen-xl mx-auto mt-12">
                <Image src={DesktopPic} alt="pic" className="lg:w-[90%] mx-auto hidden lg:block"/>
                <Image src={AppPic} alt="pic" className="lg:w-[80%] object-contain object-center mx-auto  lg:hidden"/>
              </div> */}
            </div>
            <section className="md:max-w-screen-2xl mx-auto ">
              <h1 className="font-bold my-4">All Products : </h1>
                <div className="  grid grid-cols-2 md:grid-cols-3 px-4 lg:p-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 ">
                    {
                      products.map((product, index) => (
                        <div key={index}>
                          {
                            <ProductCard product={product}isOnSale={product.isOnSale}/>
                          }
                        </div>
                      ))
                    }
                </div>
            </section>
            </div>

        </main>
        </>
  )
}
