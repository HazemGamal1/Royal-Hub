import React from 'react'
import { simplifiedProduct } from '../utils/interfaces/interface'
import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
interface PropTypes {
    product: simplifiedProduct,
    isOnSale: boolean
}

const ProductCard = ({ product, isOnSale} : PropTypes) => {
  return (
    <div className="group relative bg-white p-3 rounded-lg " >
        {isOnSale && <span className="absolute z-10 left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white bg-opacity-95">Sale</span>}
        <div className='absolute top-2 right-2 bg-gray-100 group rounded-lg p-1 opacity-0 z-10 group-hover:opacity-100 cursor-pointer'>
            <Heart className='opacity-0 group-hover:opacity-100 duration-300'/>
        </div>
        <Link href={`/product/${product.slug}`}>
            <div className="aspect-square w-full  overflow-hidden rounded-md  group-hover:opacity-75 lg:h-80 cursor-pointer ">
                <Image src={product.imageUrl} alt="product photo" className="w-full h-full object-contain object-center lg:h-full lg:w-full group-hover:scale-105 duration-300" width={300} height={300}/>
                
            </div>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm justify-between text-gray-700 font-medium">
                            {product.name.split(" ").slice(0, 4).join(" ")}{product.name.split(" ").join(" ").length > 15 ? "..." : " "}
                    </h3>
                    <p className="text-sm text-gray-900 flex gap-2 font-bold"><span className='text-orange-400'>EGP</span> {product.price}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                    {
                        (product.stock < 10 && product.stock > 0) && <p className='text-sm text-[#F78B1E] max-w-max bg-[#FEF3E9] p-1 rounded-lg'>Only {product.stock} units available</p>
                    }
                    {product.stock === 0  && <p className='text-sm text-red-500'>Out of stock</p>}
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard
