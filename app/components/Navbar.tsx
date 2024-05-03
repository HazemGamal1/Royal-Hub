"use client"
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import useCart from "../store/useCart";
const Navbar = () => {
  const {cart} = useCart();
  return (
    <nav className=" px-4 py-3  bg-white bg-transparent w-full">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href="/">
          <h1 className="text-xl font-bold hover:text-indigo-600 duration-300 flex items-center gap-2 w-15 h-15">
            {/* <LuCrown className="text-indigo-600"/> */}
            Royal Hub
          </h1>
          </Link>
            <div className="flex-1 mx-52 gap-4 items-center hidden bg-gray-100 rounded-md py-1 px-2 border-md lg:flex focus:outline-none focus:border-indigo-500 focus:shadow-lg">
                <label htmlFor="search" className="cursor-pointer text-gray-500 hover:text-indigo-600"><Search /></label>
                <input type="text"  name="" id="search" className="w-full p-1 bg-transparent  border-transparent rounded-md focus:outline-none"/>
            </div>
          <div className="flex gap-4">
            <Button>Sign Up</Button>

            <button className="text-xl text-gray-500 bg-gray-100 p-2 rounded-lg hover:text-indigo-600"><FaHeart /></button>
            <Link href={"/cart"}><button className="relative text-2xl text-gray-500 bg-gray-100 p-2 rounded-lg hover:text-indigo-600"><IoCart /> 
              <div className="absolute top-1 right-1 text-sm text-indigo-600 font-bold ">
                {cart.length}
                </div>
              </button>
            </Link>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
