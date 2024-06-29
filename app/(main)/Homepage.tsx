"use client"
import Navbar from "@/app/components/Navbar";
import { simplifiedProduct } from "../utils/interfaces/interface";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import FullPageLoader from "../components/FullPageLoader";
import useLoading from "../store/useLoading";
import { getData } from "../utils/api/dataApi";

export default function Homepage() {
  const [products, setProducts] = useState<simplifiedProduct[]>([]);
  const {isLoading, setIsLoading} = useLoading();
  
  useEffect(() => {
    getData(setProducts, setIsLoading);
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
              <Navbar />
              <div className="lg:mt-12 lg:max-w-screen-xl lg:mx-auto">
                {/* <Hero /> */}
              </div>
            <div className="max-w-screen-2xl mx-auto">
              <div className="w-full mx-auto lg:w-full">
                {/* <Slider /> */}
              </div>
              {/* <div className="w-full max-w-screen-xl mx-auto mt-12">
                <Image src={DesktopPic} alt="pic" className="lg:w-[90%] mx-auto hidden lg:block"/>
                <Image src={AppPic} alt="pic" className="lg:w-[80%] object-contain object-center mx-auto  lg:hidden"/>
              </div> */}
            </div>
            <section className="md:max-w-screen-2xl mx-auto px-4 2xl:px-0">
              <h1 className="font-bold my-4">All Products : </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 px-4 lg:p-0 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 ">
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
            {/* <Footer /> */}
        </main>
        </>
  )
}
