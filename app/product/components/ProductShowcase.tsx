"use client"
import ImageGallery from "@/app/components/ImageGallery"
import { fullProduct } from "@/app/utils/interfaces/interface"
import {Truck } from "lucide-react";
import { BsCash } from "react-icons/bs";
import AddProductBtns from "@/app/components/AddProductBtns";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
const ProductShowcase = ({data} : {data : fullProduct}) => {
    const [quantity, setQuantity]= useState<number>(1);
    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(quantity => quantity - 1);
        }else{
            return;
        }
    }
    const handleIncrement = () => {
        if(quantity === data.stock){
            setQuantity(Number(data.stock))
        }else{
            setQuantity(quantity => quantity + 1);
        }
    }
    const changeQuantity = (e: any) => {
        if(e.target.value > data.stock){
            setQuantity(Number(data.stock));
        }else{
            setQuantity(Number(e.target.value))
        }
    }
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <Breadcrumb className="mb-8">
                <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{data.name}</BreadcrumbPage>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ImageGallery images={data.images} isOnSale={data.isOnSale}/>
                        <div className="flex flex-col gap-8 mx-auto text-center md:text-left">
                            <div>
                                <h1 className="font-semibold text-2xl md:text-4xl">{data.name}</h1>
                                <div className="flex gap-4 my-6 max-w-max md:mx-0 mx-auto">
                                    <div className="max-w-max ">
                                        <div className="bg-gray-100 max-w-max rounded-full p-2 mx-auto">
                                            <Truck/>
                                        </div>
                                        <p className="text-xs">Fast Shipping</p>
                                    </div>
                                    <div className="max-w-max ">
                                        <div className="bg-gray-100 max-w-max rounded-full p-2 mx-auto">
                                            <BsCash className="text-2xl"/>
                                        </div>
                                        <p className="text-xs">Pay On Delivery</p>
                                    </div>
                                </div>
                                {
                                    data.stock > 0 ? 
                                    <p><span className="text-green-500 font-bold">Available </span>: {data.stock} units in stock</p>
                                    :
                                    <p className="text-red-600 font-bold">Product is out of stock</p>
                                }
                                
                            </div>
                            <div className="flex gap-3 max-w-max mx-auto md:mx-0">
                                <p className="font-bold text-main text-xl">EGP</p>
                                <p className="text-4xl font-bold">
                                    {data.price}
                                </p>
                            </div>
                            <div>
                                {data.description}
                            </div>
                            {
                                data.stock > 0 &&
                                <>
                                    <div className="flex items-center mx-auto">
                                        <p className="mr-2">Quanity : </p>
                                        <Button onClick={handleDecrement} className="rounded-none">-</Button>
                                        <input type="text" className="px-4 py-2   w-[5rem] text-center" value={quantity} onChange={(e : any) => changeQuantity(e)} />
                                        <Button onClick={handleIncrement} className="rounded-none">+</Button>
                                    </div>
                                    <div className="w-full">
                                        <AddProductBtns product={{ images: data.images, _id: data._id, name: data.name , price: data.price, quantity: quantity}}/>

                                    </div>
                                </>
                            }
                        </div>
                    </div>

                </div>
  )
}

export default ProductShowcase
