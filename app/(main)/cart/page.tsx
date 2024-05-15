"use client"

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useCart from "../../store/useCart";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import { Button } from "@/components/ui/button"
import {  useState } from "react"
import { client } from "../../lib/sanity"
import { IoCart } from "react-icons/io5";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";
import FullPageLoader from "@/app/components/FullPageLoader";
// import product from "@/sanity/schemaTypes/product"
const Cart = () => {
    const [customer, setCustomer] = useState<string>();
    const [customerAddress, setCustomerAddress] = useState<string>();
    const [customerNumber, setCustomerNumber] = useState<string>();
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const {cart} = useCart();
    const now = new Date();
    const formattedDate = now.toISOString();
    const total = cart.reduce((acc, product) => acc +  (product.price  * product.quantity) , 0)

    const handlePlaceOrder = async () => {
        setLoading(true);
        const orderDoc = {
            _type: 'order',
            customer: customer,
            customerAddress: customerAddress,
            customerNumber: customerNumber,
            orderDate: formattedDate,
            products: cart.map(item => ({
            product: item.name,
            quantity: item.quantity,
            priceAtTime: item.price,
            _key: item.name
            })),
            status: "successful",
            total: total
        }   

        try {
            const result = await client.create(orderDoc);
            console.log("Order placed", result);
            toast.success("Order has been placed");
        }catch(error){
            console.log("Error placing order", error);
            toast.success("Problem placting order");
        }
        setLoading(false);
        setConfirmed(true);
        
    }

    console.log(customer);
  return (
    <div className="flex flex-col justify-between min-h-screen">
        {
            loading &&
            <FullPageLoader />
        }
        <div>
            {
                cart.length > 0 ?
                <div className="mt-10 w-full lg:max-w-screen-2xl mx-auto ">
                    <div className="mb-7 px-4">
                        <h1 className="font-bold text-2xl ">Shopping Cart </h1>
                        <p><span className="font-bold">{cart.length} items </span> in your bag</p>
                    </div>
                    <div className=" px-4  flex flex-col lg:flex-row  gap-8">
                        <div className="flex-1 p-2">
                            <ul className="flex flex-col gap-8">
                                {
                                    cart.map((product, index) => (
                                        <li className={`flex justify-between gap-5 items-center pb-4 ${index != cart.length - 1 && "border-b border-b-main"} px-4`} key={index}>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-[5rem] h-[5rem]">
                                                    <Image src={urlFor(product.images[0]).url()} alt="product image" width={100} height={100} className="object-scale-down object-center w-full h-full"/>
                                                </div>
                                                <p className="font-bold">{product.name}</p>
                                                {product.quantity}
                                            </div>
                                            <p><span className="text-main font-bold">EGP</span> {product.price}</p>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        
                        <div className="w-full lg:w-[25rem] bg-gray-100 rounded-lg flex flex-col justify-between p-4 max-h-[20rem] sticky top-32">
                            {
                                !confirmed &&
                                <div className="">
                                    <p className="font-bold">Cart Total: {total}</p>
                                    <form className="my-4">
                                        <label htmlFor="customer">Name : </label>
                                        <input type="text " className="w-full bg-gray-200 rounded-lg p-2" id="customer" onChange={(e) => setCustomer(e.target.value)}/>
                                        <label htmlFor="address">Address : </label>
                                        <input type="text " className="w-full bg-gray-200 rounded-lg p-2" id="address" onChange={(e) => setCustomerAddress(e.target.value)}/>
                                        <label htmlFor="phoneNumber">Phone Number : </label>
                                        <input type="text " className="w-full bg-gray-200 rounded-lg p-2" id="phoneNumber" onChange={(e) => setCustomerNumber(e.target.value)}/>
                                    </form>
                                </div>
                            }
                            <div className="">
                                {
                                    confirmed ? 
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-2 w-full font-bold">
                                            <div>
                                                <FaCheck className="text-main"/> 
                                            </div>
                                            <p>Order Confirmed</p>
                                        </div> 
                                        Thank you for using Royal Hub
                                    </div>
                                    :
                                    <Button onClick={handlePlaceOrder} className="w-full" >Confirm order</Button>        
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="w-full h-screen grid place-content-center text-center">
                    <div className="mx-auto max-w-max">
                        <IoCart className="text-7xl"/>
                    </div>
                    <h1>No items are in the cart</h1>
                </div>  
            }
        </div> 
    </div>
  )
}

export default Cart;
