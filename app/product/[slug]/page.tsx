"use client"
import { fullProduct } from "@/app/utils/interfaces/interface";
import { client, urlFor } from "@/app/lib/sanity";
import ProductShowcase from "../components/ProductShowcase";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import FullPageLoader from "@/app/components/FullPageLoader";

export default function ProductPage({params} : {params: {slug : string}}) {
    const [product, setProduct] = useState<fullProduct>();
    useEffect(() => {
        async function getData(slug : string){
            const product = await client.fetch(groq`*[_type == 'product' && slug.current == "${slug}"][0]{
                images,
                price,
                name,
                description,
                "slug": slug.current,
                "categoryName": category->name,
                isOnSale
              }`)
              
              setProduct(product);
        }
        getData(params.slug);
    }, [])
    
    return(
        <div className="relative">
            {
                product ?
                <ProductShowcase data={product}/>
            :
            <FullPageLoader />
            }
        </div>
    )
}