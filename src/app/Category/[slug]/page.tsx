import { products } from "@/utils/mock"
import { StaticImageData } from "next/image"
import ProductCard from "@/Sections/ProductsList"
import ProductsList from "@/Sections/ProductsCard"

const getProductByCategory=(category:string)=>{
  return products.filter((products)=>products.category===category)
}
export default function Page({ params }: { params: { slug: string } }) {
  const result=getProductByCategory(params.slug)
    return <div className='flex justify-evenly mt-16 py-10 flex-wrap'>
      {
        result.length>0?
      result.map((product)=>(
        <ProductsList key={product.id}  
        title={product.name} 
        price={product.price} 
        image={product.image as StaticImageData} 
        category={product.category}
        id={product.id}/>
     
      )):<p>No Products to show</p>
      }
      
   
 
</div> 
}