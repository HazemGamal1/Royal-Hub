import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
      <ToastContainer theme="light" position="top-left"/>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
