import { products } from "@/utils/mock"
import Image from "next/image"
import { StaticImageData } from "next/image"
import ProductCard from "@/Sections/ProductsList"
import ProductsList from "@/Sections/ProductsCard"
import Quantity from "@/utils/Quantity"
import AddtoCart from "@/components/ui/AddtoCart"

const getProductDetails=(id:number|string)=>{
  return products.filter((products)=>products.id==id)
}
const sizes=["xs","sm","md","lg","xl"]
export default function Page({ params }: { params: {id: string } }) {
  const result=getProductDetails(params.id)
    return <div className='flex mt-16 py-10 flex-wrap'>
      {
      result.map((product)=>(
       <div key={product.id} className="flex justify-between gap-5">
        <div>
          <Image src={product.image} alt='image' className="h-500 w-1000"/>
        </div>

        <div>
        <div>
          <h1 className="text-xl text-black">{product.name}</h1>
          <h2 className="font-bold text-gray-400">{product.tagline}</h2>
        </div>
        <div>
          <h3 className="font-semibold text-sm mt-7">SELECT SIZE</h3>
          
          <div className="flex gap-x-3 mt-3">{
            sizes.map((size)=>{
              return(
             <div className=" flex justify-center items-center h-6 w-6 rounded-full hover:shadow-xl ">
 <span className="text-[15px] font-semibold text-center text-gray-600">{size}</span>
         </div>
              )
            })
          }</div>
          
          <div className="flex items-center gap-x-3 mt-7">
            <h3 className="font-semibold text-lg">Quantity:</h3>
            <div></div>
            <Quantity/>
          </div>
          <div className=" flex items-center gap-x-4 mt-5">
          <AddtoCart/>
          <h2 className="text-2xl font-bold text-black">{product.price.toFixed(2)}$</h2>
          </div>
           </div>
       </div></div>
      ))
      }
      
  
 
</div> 
}