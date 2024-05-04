import React from 'react'
import { Circles } from 'react-loader-spinner'
const FullPageLoader = () => {
  return (
    <div className="fixed top-0 w-full h-full bg-gray-300/45 bg z-[1000] grid place-content-center">
        <Circles
            visible={true}
            height="80"
            width="80"
            color="#000"
            ariaLabel="grid-loading"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
        />
    </div> 
  )
}

export default FullPageLoader
