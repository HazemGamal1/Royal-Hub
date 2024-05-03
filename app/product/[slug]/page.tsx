import { fullProduct } from "@/app/utils/interfaces/interface";
import { client, urlFor } from "@/app/lib/sanity";
import ImageGallery from "@/app/components/ImageGallery";
import { Crown, Truck } from "lucide-react";
import { BsCash } from "react-icons/bs";
import { Button } from "@/components/ui/button";
async function getData(slug: string){
    const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        isOnSale
      }`;
    const data = await client.fetch(query);
    return data;
}

export default async function ProductPage({params} : {params: {slug : string}}) {
    const data: fullProduct = await getData(params.slug);
    return(
        <div className="relative">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8 sticky ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ImageGallery images={data.images} isOnSale={data.isOnSale}/>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h1 className="font-semibold text-2xl md:text-4xl">{data.name}</h1>
                            <div className="flex gap-4 my-6">
                                <div className="max-w-max">
                                    <div className="bg-gray-100 max-w-max rounded-full p-2 mx-auto">
                                        <Truck/>
                                    </div>
                                    <p className="text-xs">Fast Shipping</p>
                                </div>
                                <div className="max-w-max ">
                                    <div className="bg-gray-100 max-w-max rounded-full p-2 mx-auto">
                                        <BsCash className="text-2xl"/>
                                    </div>
                                    <p className="text-xs">Free Shipping</p>
                                </div>
                                <div className="max-w-max ">
                                    <div className="bg-gray-100 max-w-max rounded-full p-2 mx-auto">
                                        <Crown className="text-2xl"/>
                                    </div>
                                    <p className="text-xs">Royal Quality</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <p className="font-bold text-indigo-600 text-xl">EGP</p>
                            <p className="text-4xl font-bold">
                                {data.price}
                            </p>
                        </div>
                        <div>
                            {data.description}
                        </div>
                        <div className="flex gap-5">
                            <Button>Add To Cart</Button>
                            <Button>Checkout</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}