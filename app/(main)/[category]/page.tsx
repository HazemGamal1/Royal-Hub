import { client } from '@/app/lib/sanity'
import { simplifiedProduct } from '../../utils/interfaces/interface'
import ProductCard from '../../components/ProductCard'
import { groq } from 'next-sanity'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default async function CategoryPage ({params} : {params : {category: string}}){
  const categoryString = params.category.replaceAll("%20", " ");
  const products = await client.fetch<simplifiedProduct[]>(groq`*[_type == "product" && category->name == "${categoryString}"] {
    name,
    price,
    stock,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
    "slug": slug.current,
    isOnSale
  }`)
    
  return (
    <div className='px-4 2xl:px-0'>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{categoryString}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className='font-bold text-2xl my-6'>{categoryString} Products</h1>
      <ul className='font-bold text-2xl text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8 px-6'>
        {products.map((product, index) => (
          <li key={index}>
            <ProductCard product={product}  isOnSale={product.isOnSale}/>
          </li>
        ))}        
      </ul>
    </div>
    
  )
}

