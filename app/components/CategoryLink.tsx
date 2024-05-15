"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CategoryLink = ({route, index} : {route: any, index: number}) => {
    const path = usePathname()
  return (
    <Link href={`/${route.name}`}  key={index}><li className={`${path.includes(route.name) && "text-indigo-300" }  duration-300 transition-colors cursor-pointer`}>{route.name}</li></Link>
  )
}

export default CategoryLink
