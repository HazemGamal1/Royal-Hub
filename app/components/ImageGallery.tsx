"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface iAppProps {
    images: any,
    isOnSale: boolean
}
export default function ImageGallery({images, isOnSale} : iAppProps){
    const [bigImage, setBigImage] = useState(images[0])

    const handleSmallImageclick = (image: any) => {
        setBigImage(image);
    }
    return(
        <div className="grid gap-4 lg:grid-cols-5 h-[30rem] w-80 lg:h-full lg:w-full mx-auto lg:mx-0">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col max-h-full w-full">
                {
                    images.map((image : any, index : any) => (
                        <div key={index} className="overflow-hidden rounded-lg w-full border py-2 px-3 hover:border-indigo-600 h-32">
                            <Image src={urlFor(image).url()} alt="Product Image" width={200} height={200} className={`h-full w-full object-contain object-center cursor-pointer ${image !== bigImage ? "opacity-75" : "opacity-100"}`} onClick={() => handleSmallImageclick(image)}/>
                        </div>
                    ))
                }
            </div>
            
            <div className="relative overflow-hidden rounded-lg  lg:col-span-4 max-h-[40rem] lg:min-h-[35rem] w-full border">
                <Image src={urlFor(bigImage).url()} alt="big image" width={500} height={500} className="h-full w-full object-contain object-center"/>

                {isOnSale && <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white bg-opacity-95">Sale</span>}
            </div>
        </div>
    )
}

