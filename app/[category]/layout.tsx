
import CategoriesBar from "../components/CategoriesBar"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Toaster } from "sonner"
const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <CategoriesBar />
        {children}
        <Footer />
    </div>
  )
}

export default layout
