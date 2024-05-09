"use client"
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import useCart from "../store/useCart";
import CategoriesBar from "./CategoriesBar";
const Navbar = () => {
  const {cart} = useCart();
  const total = cart.reduce((acc, product) => acc +  (product.price  * product.quantity) , 0)
  return (
    <nav className=" pt-3 fixed top-0 z-[100] bg-white bg-transparent w-full">
        <div className=" px-4 max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href="/">
          <h1 className="text-xl font-bold hover:text-indigo-600 duration-300 flex items-center gap-2 w-15 h-15">
            {/* <div className="bg-main text-center rounded-full overflow-hidden p-1.5">
              <LuCrown className="text-white stroke-white"/>
            </div> */}
            Royal Hub
          </h1>
          </Link>
            <div className="flex-1 mx-52 gap-4 items-center hidden bg-gray-100 rounded-md py-1 px-2 border-md lg:flex focus:outline-none focus:border-indigo-500 focus:shadow-lg">
                <label htmlFor="search" className="cursor-pointer text-gray-500 hover:text-indigo-600"><Search /></label>
                <input type="text"  name="" id="search" className="w-full p-1 bg-transparent  border-transparent rounded-md focus:outline-none"/>
            </div>
          <div className="flex gap-4 items-center">
            {/* <Button>Sign Up</Button> */}

            {/* <button className="text-xl hover:text-main flex items-center gap-2"><FaHeart /> <p className="text-md hidden lg:block">Wishlist</p></button> */}
              <Link href={"/cart"}>
                <button className="relative flex items-center gap-3 text-2xl  p-2 rounded-lg hover:text-main">
                  <IoCart className="w-7 h-7"/> 
                  <div className="flex-col justify-between hidden lg:block">
                    <p className="text-sm">My Cart</p>
                    <p className="text-sm">({total} EGP)</p>
                  </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <CategoriesBar />

        </div>
      </nav>
  )
}

export default Navbar
