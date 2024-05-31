"use client"
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";
import useCart from "../store/useCart";
import CategoriesBar from "./CategoriesBar";
const Navbar = () => {
  const {cart} = useCart();
  const total = cart.reduce((acc, product) => acc +  (product.price  * product.quantity) , 0)
  return (
    <nav className="sticky top-0 z-[100] bg-white bg-transparent w-full">
        <div className=" px-4  py-3 max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href="/">
          <h1 className="text-xl font-bold hover:text-indigo-600 duration-300 flex items-center gap-2 w-15 h-15">
            {/* <div className="bg-main text-center rounded-full overflow-hidden p-1.5">
              <LuCrown className="text-white stroke-white"/>
            </div> */}
            Royal Hub
          </h1>
          </Link>
            <div className="flex-1 mx-52 gap-4 items-center hidden lg:flex">
              {/* <div className="flex-1 flex items-center bg-gray-100 rounded-md py-1 px-2 border-md lg:flex focus:outline-none focus:border-indigo-500 focus:shadow-lg">
                <label htmlFor="search" className="cursor-pointer text-gray-500 hover:text-indigo-600"><Search /></label>
                <input type="text"  name="" id="search" placeholder="Search products and categories" className="w-full p-1 bg-transparent  border-transparent placeholder-black rounded-md focus:outline-none"/>
              </div>
                <Button className="uppercase">Search</Button>  */}
            </div>
          <div className="flex gap-4 items-center">
            {/* <Button>Sign Up</Button> */}

            {/* <button className="text-xl hover:text-main flex items-center gap-2"><FaHeart /> <p className="text-md hidden lg:block">Wishlist</p></button> */}
              {/* <button className="flex gap-2 items-center hover:bg-slate-100 p-2 rounded-lg hover:text-main"><BsGlobe /> EN</button> */}
              <Link href={"/cart"}>
                <button className="relative flex items-center gap-3 text-2xl  p-2 rounded-lg hover:text-main hover:bg-slate-100">
                  <IoCart className="w-6 h-6"/> 
                  {/* <div className="flex-col justify-between hidden lg:block">
                    <p className="text-sm">My Cart</p>
                    <p className="text-sm">({total} EGP)</p>
                  </div> */}
              </button>
            </Link>
          </div>
        </div>
          <CategoriesBar />
      </nav>
  )
}

export default Navbar
