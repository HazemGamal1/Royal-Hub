"use client"
import { useEffect, useState } from "react";

import ProductShowcase from "../components/ProductShowcase";
import { getProduct } from "@/app/utils/api/dataApi";

import { fullProduct } from "@/app/utils/interfaces/interface";

export default function ProductPage({params} : {params: {slug : string}}) {
    const [product, setProduct] = useState<fullProduct>();
    useEffect(() => {
        const getData = async() => {
            const product = await getProduct(params.slug);
            setProduct(product);
        }
        getData();
    }, [])
    return(
        <div className="relative">  
        {
            product &&
            <ProductShowcase data={product}/>
        }     
        </div>
    )
}

