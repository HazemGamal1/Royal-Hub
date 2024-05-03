import CategoriesBar from "../components/CategoriesBar"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <div className=" backdrop-blur-lg bg-transparent sticky top-0 w-full z-10">
            <Navbar />
            <CategoriesBar />
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout
