"use client"
import product from "@/sanity/schemaTypes/product"
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

const page = () => {
    const {cart} = useCart();
    let total : number = cart.reduce((acc, curr) => acc + curr.price, 0);
    console.log(total);
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <div>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto px-4">
                <Table>
                <TableCaption>A list of your cart items</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead >Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="w-[100px]">Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cart.map((product, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium flex gap-2 items-center"><div className="w-20 h-20"><Image src={urlFor(product.images[0]).url()} width={100} height={100} alt="image" className="h-full w-full object-contain object-center"/></div> {product.name}</TableCell>
                        <TableCell>{product.categoryName}</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="text-right">{product.price}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">EGP {total}</TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default page;
