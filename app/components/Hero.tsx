import React from 'react'
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col-reverse items-center h-[20rem]  lg:h-[35rem] justify-center">
        <div className="w-full text-center ">
            <h1 className="text-5xl lg:text-8xl  font-bold my-12 mx-auto text-[#252432] select-none">Welcome to Royal Hub</h1>
            <Button>See Our Latest Sales</Button>
        </div>
        
    </div>
  )
}

export default Hero
