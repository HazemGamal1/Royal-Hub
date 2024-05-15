import React from 'react'
import { simplifiedProduct } from '../utils/interfaces/interface'
import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import useLoading from '../store/useLoading'
import { Skeleton } from '@/components/ui/skeleton'
interface PropTypes {
    product: simplifiedProduct,
    isOnSale: boolean
}

const ProductCard = ({ product, isOnSale} : PropTypes) => {
    const {isLoading} = useLoading();
  return (
    <div className="group relative bg-white p-3 rounded-lg min-w-32 flex flex-col justify-between   lg:min-h-[28rem]" >
        {isOnSale && <span className="absolute z-10 left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white bg-opacity-95">Sale</span>}
        <div className='absolute top-2 right-2 bg-gray-100 group rounded-lg p-1 opacity-0 z-10 group-hover:opacity-100 cursor-pointer'>
            <Heart className='opacity-0 group-hover:opacity-100 duration-300'/>
        </div>
        <Link href={`/product/${product.slug}`} className='flex flex-col justify-around h-full flex-1'>
            <div className="aspect-square w-full  rounded-md  group-hover:opacity-75 cursor-pointer ">
                {
                    isLoading ? 
                    <div className='mx-auto max-w-max'>
                        <Skeleton className='w-[250px] h-[250px]  rounded-lg '/>
                    </div>
                    :
                    <>
                        <Image src={product.imageUrl} alt="product photo" className="w-full max-w-[12rem] mx-auto h-full object-contain object-center lg:h-full lg:w-full group-hover:scale-105 duration-300" width={300} height={300}/>
                    </>

                }
                
            </div>

            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm justify-between text-gray-700 font-medium">
                            {product.name.split(" ").slice(0, 4).join(" ")}{product.name.split(" ").join(" ").length > 15 ? "..." : " "}
                    </h3>
                    <p className="text-sm text-gray-900 flex gap-2 font-bold"><span className='text-main'>EGP</span> {product.price}</p>
                    <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                    {
                        (product.stock < 10 && product.stock > 0) && <p className='text-[10px] lg:text-sm text-main max-w-max bg-[#fce9fe9d] p-1 rounded-md'>Only {product.stock} units available</p>
                    }
                    {product.stock === 0  && <p className='text-[10px] lg:text-sm text-red-500 bg-[#feece99e] max-w-max rounded-md p-1'>Out of stock</p>}
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard
