import { Suspense } from "react"
import FullPageLoader from "../../components/FullPageLoader"

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="min-h-screen">
        <div className="my-10 max-w-screen-2xl mx-auto">
            {children}
        </div>
    </div>
  )
}

export default Layout
