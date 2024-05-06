"use client"
import ImageGallery from "@/app/components/ImageGallery"
import { fullProduct } from "@/app/utils/interfaces/interface"
import { Crown, Truck } from "lucide-react";
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
                                        <p className="text-xs">Free Shipping</p>
                                    </div>
                                    <div className="max-w-max ">
                                        <div className="bg-gray-100 max-w-max rounded-full p-2 mx-auto">
                                            <Crown className="text-2xl"/>
                                        </div>
                                        <p className="text-xs">Royal Quality</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <p className="font-bold text-indigo-600 text-xl">EGP</p>
                                <p className="text-4xl font-bold">
                                    {data.price}
                                </p>
                            </div>
                            <div>
                                {data.description}
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="mr-2">Quanity : </p>
                                <Button onClick={handleDecrement}>-</Button>
                                <div className="px-4 py-2 border rounded-lg">
                                    {quantity}
                                </div>
                                <Button onClick={() => setQuantity(quantity => quantity + 1)}>+</Button>
                            </div>
                            <AddProductBtns product={{ images: data.images, _id: data._id, name: data.name , price: data.price, quantity: quantity}}/>
                        </div>
                    </div>

                </div>
  )
}

export default ProductShowcase
