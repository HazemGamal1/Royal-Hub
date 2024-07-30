import Navbar from "@/app/components/Navbar"


const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="min-h-screen">
        <Navbar />
        <div className="my-10 max-w-screen-2xl mx-auto">
            {children}
        </div>
    </div>
  )
}

export default Layout
