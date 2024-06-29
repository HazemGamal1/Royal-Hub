import { LuCrown } from "react-icons/lu";
import { IoCart } from "react-icons/io5";
import Link from "next/link";
import CategoriesBar from "./CategoriesBar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[100] bg-white bg-transparent w-full">
        <div className=" px-4  py-3 max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href="/">
          <h1 className="text-xl font-bold hover:text-indigo-600 duration-300 flex items-center gap-2 w-15 h-15">
            <div className="bg-main text-center rounded-full overflow-hidden p-1.5">
              <LuCrown className="text-white stroke-white"/>
            </div>
            {/* Royal Hub */}
          </h1>
          </Link>
            <div className="flex-1 mx-52 gap-4 items-center hidden lg:flex">
            </div>
          <div className="flex gap-4 items-center">

            <Link href={"/cart"}>
              <button className="relative flex items-center gap-3 text-2xl  p-2 rounded-lg hover:text-main hover:bg-slate-100">
                  <IoCart className="w-6 h-6"/> 
              </button>
            </Link>
          </div>
        </div>
          <CategoriesBar />
      </nav>
  )
}

export default Navbar
