import useLoading from "@/app/store/useLoading";
import { client } from "@/app/lib/sanity";
import { fullProduct, simplifiedProduct } from "../interfaces/interface";
import { groq } from "next-sanity";

//get product 
export const getProduct = async (slug : string) => {
  const product = await client.fetch(groq`*[_type == 'product' && slug.current == "${slug}"][0]{
      images,
      price,
      name,
      description,
      stock,
      "slug": slug.current,
      "categoryName": category->name,
      isOnSale
  }`)
    
  return product;
} 
//get products for specific category
export async function getCategoryData(category: string, setProducts: (roducts: simplifiedProduct[]) => void){
    // setIsLoading(true);
    const products = await client.fetch<simplifiedProduct[]>(groq`*[_type == "product" && category->name == "${category}"] {
      name,
      price,
      stock,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
      "slug": slug.current,
      isOnSale
    }`)
    setProducts(products);
    // setIsLoading(false);
  }
//get all products
export async function getData(setProducts: (products: simplifiedProduct[]) => void, setIsLoading: (state: boolean) => void){
    setIsLoading(true);
    const products = await client.fetch<simplifiedProduct[]>(groq`*[_type == "product"]{
    name,
    price,
    stock,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
    "slug": slug.current,
    isOnSale
    }`);
    setProducts(products);
    setIsLoading(false);
}