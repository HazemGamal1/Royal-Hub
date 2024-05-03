import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import heroImg from '@/public/hero.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import CategoriesBar from "../components/CategoriesBar";
import { client, urlFor } from "../lib/sanity";
import { simplifiedProduct } from "../utils/interfaces/interface";
import ProductCard from "../components/ProductCard";


async function getData(){
  const query = `*[_type == "product"] {
    name,
    price,
    stock,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
    "slug": slug.current,
    isOnSale
  }`
  const data = await client.fetch(query);
  return data;
}
const Homepage = async () => {
  const data : simplifiedProduct[] = await (getData());
  return (
    <>
        <main  className="flex flex-col justify-between min-h-screen ">
          <div >
            <div className="relative">
              <Image src={heroImg} priority alt="hero image" className="absolute animate-pulse -z-10 object-contain object-top top-10 lg:top-10 w-full h-full"/>

              <div className=" backdrop-blur-lg bg-transparent fixed top-0 w-full z-[100]">
                <Navbar />
                <CategoriesBar />
              </div>
              <div className="mb-8 mt-20">
              <Hero />
              </div>

            </div>
            <section className="md:max-w-screen-2xl mx-auto">
              <h1 className="font-bold my-4">All Products : </h1>
              <div className=" grid grid-cols-2 md:grid-cols-3 px-4 lg:p-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4 ">
                  {
                    data.map((product, index) => (
                      <div key={index}>
                        <ProductCard product={product}isOnSale={product.isOnSale}/>
                      </div>
                    ))
                  }
              </div>
            </section>
          </div>

        </main>
        <Footer />
    </>
  )
}

export default Homepage
