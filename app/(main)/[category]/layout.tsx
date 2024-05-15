"use client"
import CategoriesBar from "../../components/CategoriesBar"
import Footer from "../../components/Footer"
import FullPageLoader from "../../components/FullPageLoader"
import Navbar from "../../components/Navbar"
import useLoading from "../../store/useLoading"
const Layout = ({children} : {children: React.ReactNode}) => {
  const { isLoading} = useLoading();
  return (
    <div className="min-h-screen">
      {
        isLoading && 
        <FullPageLoader/>
      }
        <div className="my-10 max-w-screen-2xl mx-auto">
            {children}
        </div>
    </div>
  )
}

export default Layout
