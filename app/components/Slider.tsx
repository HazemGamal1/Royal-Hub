import React from 'react'
import slide1 from '@/public/SlidersENAPP.png'
import slide2 from '@/public/ervs.png'
import slide3 from '@/public/1g.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'

const Slider = () => {
  return (
    <div className='text-center mx-auto'>
    <Carousel plugins={[
        Autoplay({
            delay: 4000,
        }),
    ]} >
        <CarouselContent className='cursor-grabbing'>
            <CarouselItem className='sm:basis-1/2 lg:basis-1/3 '><Image src={slide1} alt='slide1'/></CarouselItem>
            <CarouselItem className='sm:basis-1/2 lg:basis-1/3 mx-auto'><Image src={slide2} alt='slide2'/></CarouselItem>
            <CarouselItem className='sm:basis-1/2 lg:basis-1/3 mx-auto'><Image src={slide3} alt='slide3'/></CarouselItem>
            <CarouselItem className='sm:basis-1/2 lg:basis-1/3 mx-auto'><Image src={slide2} alt='slide2'/></CarouselItem>
            <CarouselItem className='sm:basis-1/2 lg:basis-1/3 mx-auto'><Image src={slide2} alt='slide2'/></CarouselItem>
        </CarouselContent>
        <CarouselPrevious variant={"ghost"} className='hidden lg:block'/>
        <CarouselNext variant={"ghost"}  className='hidden lg:block'/>
    </Carousel>
    </div>

  )
}

export default Slider
