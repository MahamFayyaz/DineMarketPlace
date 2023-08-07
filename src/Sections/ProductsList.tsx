import React from 'react'
import { products } from '@/utils/mock'
import ProductsList from './ProductsCard'
import { StaticImageData } from 'next/image'
import p1 from '/public/p1.webp'
import p2 from '/public/p2.webp'
export default function ProductCard() {
  const productschunks=products.slice(0,3);
  return (<main>
    <div className="max-w-7xl mx-auto mt-16">
<p className='text-blue-700 font-bold text-center'>PRODUCTS</p>
<p className='text-black font-bold text-2xl lg:text-3xl text-center pt-3'>Check what we have</p>
    </div>
    <div className='flex justify-evenly mt-16'>
      {
        productschunks.map((product)=>(
          <ProductsList key={product.id}  title={product.name} price={product.price} image={product.image as StaticImageData} category={product.category} id={product.id}/>
        ))
        }
   
</div></main>
  )
}




