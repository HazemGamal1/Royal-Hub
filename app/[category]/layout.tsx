"use client"
import CategoriesBar from "../components/CategoriesBar"
import Footer from "../components/Footer"
import FullPageLoader from "../components/FullPageLoader"
import Navbar from "../components/Navbar"
import useLoading from "../store/useLoading"
const Layout = ({children} : {children: React.ReactNode}) => {
  const { isLoading} = useLoading();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {
        isLoading && 
        <FullPageLoader/>
      }
        <Navbar />
        <CategoriesBar />
        <div className="flex max-w-screen-2xl mx-auto gap-8 my-24 pb-24 pt-12">
          <div className="flex flex-col h-screen bg-gray-1 text-black 00 w-[280px]">
            <div>
              Category
            </div>
          </div>
          <div className="flex-1">
            {children}

          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout
