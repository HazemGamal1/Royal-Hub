"use client"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import useCart from "../store/useCart"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { Button } from "@/components/ui/button"
import {  useState } from "react"
import { fullProduct, simplifiedProduct } from "../utils/interfaces/interface"
import { client } from "../lib/sanity"
// import product from "@/sanity/schemaTypes/product"
const Cart = () => {
    const [customer, setCustomer] = useState<string>();
    const [customerAddress, setCustomerAddress] = useState<string>();
    const [customerNumber, setCustomerNumber] = useState<string>();
    
    const {removeFromCart} = useCart();
    const {cart} = useCart();
    const now = new Date();
    const formattedDate = now.toISOString();
    const date = formattedDate.slice(0, 10);
    const total = cart.reduce((acc, product) => acc +  (product.price  * product.quantity) , 0)

    const handlePlaceOrder = async () => {
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
            alert('Order has beeen placed successfully')
        }catch(error){
            console.log("Error placing order", error);
            alert("problem placing order")
        }
    }

    console.log(customer);
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <div>
            <Navbar />
            <div className="mt-32 w-full lg:max-w-screen-2xl mx-auto ">
                <div className="mb-7">
                    <h1 className="font-bold text-2xl ">Shopping Cart </h1>
                    <p><span className="font-bold">{cart.length} items </span> in your bag</p>
                </div>
                <div className=" px-4  flex flex-col lg:flex-row  gap-8">
                    <div className="flex-1 bg-gray-100 rounded-lg p-2">
                        <ul className="flex flex-col gap-8">
                            {
                                cart.map((product) => (
                                    <li className="flex justify-between gap-5 items-center ">
                                        <div className="flex gap-5 items-center">
                                            <div className="w-[5rem] h-[5rem]">
                                                <Image src={urlFor(product.images[0]).url()} alt="product image" width={100} height={100} className="object-scale-down object-center w-full h-full"/>
                                            </div>
                                            <p className="font-bold">{product.name}</p>
                                            {product.quantity}
                                        </div>
                                        <p><span className="text-indigo-600 font-bold">EGP</span> {product.price}</p>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div className="w-[480px] bg-gray-100 rounded-lg flex flex-col justify-between p-4">
                        <p className="font-bold">Cart Total: {total}</p>
                        <form >
                            <label htmlFor="customer">Name : </label>
                            <input type="text " className="w-full bg-gray-200 rounded-lg p-2" id="customer" onChange={(e) => setCustomer(e.target.value)}/>
                            <label htmlFor="address">Address : </label>
                            <input type="text " className="w-full bg-gray-200 rounded-lg p-2" id="address" onChange={(e) => setCustomerAddress(e.target.value)}/>
                            <label htmlFor="phoneNumber">Phone Number : </label>
                            <input type="text " className="w-full bg-gray-200 rounded-lg p-2" id="phoneNumber" onChange={(e) => setCustomerNumber(e.target.value)}/>
                        </form>
                        <div className="mt-4">
                            <Button onClick={handlePlaceOrder} className="w-full">Confirm order</Button>        
                        </div>
                    </div>
                </div>
            </div>
                

        </div> 
        <Footer />
    </div>
  )
}

export default Cart;
