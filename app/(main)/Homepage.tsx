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
import FullPageLoader from "../components/FullPageLoader";
import Slider from "../components/Slider";
import Image from "next/image";
import sale from '@/public/FLASHSALE1170x60EN.png'
import useLoading from "../store/useLoading";
import ProductCategorySlider from "../components/ProductCategorySlider";
import ad from '@/public/ad1.jpg'
import ad2 from '@/public/ad2.jpg'
import ad3 from '@/public/ad3.jpg'
import Link from "next/link";
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
              <div className="">
                 <h1 className='my-4 font-bold px-4 lg:px-0'>Baby care Products : </h1>

                <div className="relative w-full lg:h-[28rem] my-4 hover:opacity-85 duration-300">
                  <Link  href="/Baby care">
                    <Image src={ad} alt="molfix ad" className="w-full h-full object-top object-cover"/>
                  </Link>
                </div>
                <div className="px-5 lg:px-0">
                  <ProductCategorySlider category="Baby care" flexBasis="1/4"/>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 bg-[#940ec011] lg:px-4 py-4 rounded-lg">
                  <div className="w-full">
                    <h1 className='my-4 font-bold px-4 lg:px-0'>Hair care Products : </h1>
                    <div className="relative w-full lg:h-[20rem] my-4 hover:opacity-85 duration-300">
                      <Link  href="/Hair care">
                        <Image src={ad2} alt="molfix ad" className="w-full h-full object-top object-cover "/>
                      </Link>
                    </div>
                    <div className="px-5 lg:px-0">
                      <ProductCategorySlider category="Hair care" flexBasis="1/2"/>
                    </div>
                  </div>

                  <div className="w-full">
                    <h1 className='my-4 font-bold px-4 lg:px-0'>Perfumes Products : </h1>
                    <div className="relative w-full lg:h-[20rem] my-4 hover:opacity-85 duration-300">
                      <Link  href="/Perfumes">
                        <Image src={ad3} alt="molfix ad" className="w-full h-full object-top object-cover "/>
                      </Link>
                    </div>
                    <div className="px-5 lg:px-0">
                      <ProductCategorySlider category="Perfumes" flexBasis="1/2"/>
                    </div>
                  </div>
                </div>
                
              </div>
              <h1 className="font-bold my-4">All Products : </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 px-4 lg:p-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 ">
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
