import CategoriesBar from "../components/CategoriesBar"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const layout = ({children } : {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col justify-between ">
      <div className="min-h-screen">
        <Navbar />
        <CategoriesBar />
        <div className="relative py-12">
          {children}
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default layout
