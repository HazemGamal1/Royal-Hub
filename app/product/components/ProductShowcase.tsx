"use client"
import ImageGallery from "@/app/components/ImageGallery"
import { fullProduct } from "@/app/utils/interfaces/interface"
import {Truck } from "lucide-react";
import { BsCash } from "react-icons/bs";
import AddProductBtns from "@/app/components/AddProductBtns";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const ProductShowcase = ({data} : {data : fullProduct}) => {
    const [quantity, setQuantity]= useState(1);
    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(quantity => quantity - 1);
        }else{
            return;
        }
    }
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8 sticky ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ImageGallery images={data.images} isOnSale={data.isOnSale}/>
                        <div className="flex flex-col gap-8">
                            <div>
                                <h1 className="font-semibold text-2xl md:text-4xl">{data.name}</h1>
                                <div className="flex gap-4 my-6">
                                    <div className="max-w-max">
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
                            <div className="flex gap-3">
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
                                    <div className="flex items-center">
                                        <p className="mr-2">Quanity : </p>
                                        <Button onClick={handleDecrement} className="rounded-none">-</Button>
                                        <input type="text" className="px-4 py-2 border  w-[5rem] text-center" value={quantity} onChange={(e : any) => setQuantity(e.target.value)}/>
                                        <Button onClick={() => setQuantity(quantity => quantity + 1)} className="rounded-none">+</Button>
                                    </div>
                                    <AddProductBtns product={{ images: data.images, _id: data._id, name: data.name , price: data.price, quantity: quantity}}/>
                                </>
                            }
                        </div>
                    </div>

                </div>
  )
}

export default ProductShowcase
