"use client"
import Navbar from "@/app/components/Navbar";
import { simplifiedProduct } from "../utils/interfaces/interface";
import ProductCard from "../components/ProductCard";
import { Suspense, useEffect, useState } from "react";
import FullPageLoader from "../components/FullPageLoader";
import useLoading from "../store/useLoading";
import { getData } from "../utils/api/dataApi";
import heroImg from '@/public/hero.png'
import Image from "next/image";
import Hero from "../components/Hero";
export default function Homepage() {
  const [products, setProducts] = useState<simplifiedProduct[]>([]);
  const {isLoading, setIsLoading} = useLoading();
  useEffect(() => {
    getData(setProducts, setIsLoading);
  }, [])

  return (
    <>
        <main  className="flex flex-col justify-between min-h-screen relative">
          <div>
              <Navbar />
              <div className="lg:max-w-screen-xl lg:mx-auto">
                <Hero />
                {/* <Image src={heroImg} priority alt="hero image" className="absolute object-contain object-center -z-[100] lg:top-10 w-full h-full"/> */}
              </div>
            <section className="md:max-w-screen-2xl mx-auto px-4 2xl:px-0">
              <h1 className="font-bold my-4">All Products : </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 px-4 lg:p-0 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 ">
                    {
                      products.map((product, index) => (
                        <div key={index}>
                          {
                            <Suspense fallback={<FullPageLoader />}>
                              <ProductCard product={product}isOnSale={product.isOnSale}/>
                            </Suspense>
                          }
                        </div>
                      ))
                    }
                </div>
            </section>
            </div>
            {/* <Footer /> */}
        </main>
        </>
  )
}
