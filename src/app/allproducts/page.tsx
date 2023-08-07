import React from 'react'
import { products } from '@/utils/mock'
import ProductsList from '@/Sections/ProductsCard'
import { StaticImageData } from 'next/image'
export default function AllProducts() {
  
  return (
    <div className='flex justify-evenly mt-16 py-10 flex-wrap'>
    {
      products.map((product)=>(
        <ProductsList key={product.id}  title={product.name} price={product.price} image={product.image as StaticImageData} category={product.category} id={product.id}/>
      ))
      }
 
</div>
  )
}
