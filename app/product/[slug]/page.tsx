import { fullProduct } from "@/app/utils/interfaces/interface";
import ProductShowcase from "../components/ProductShowcase";
import { getProduct } from "@/app/utils/api/dataApi";

export default async function ProductPage({params} : {params: {slug : string}}) {
    const product : fullProduct = await getProduct(params.slug);
    
    return(
        <div className="relative">       
            <ProductShowcase data={product}/>
        </div>
    )
}