import React from 'react'
import feature from '/public/feature.webp'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
export default function Banner
() {
  return (
    <div className='mt-16'>
     
<div className='hidden lg:inline-flex justify-between'>
  <div></div>
<div><h1 className="scroll-m-20 text-4xl text-right font-extrabold tracking-tight lg:text-5xl mt-6">
Unique and Authentic Vintage Designer Jewellery
    </h1></div>
</div>
<div></div>

<div className='hidden lg:inline-flex flex-row justify-evenly space-x-20 mt-16'> 
<div className='flex space-x-5'>
<div>
    <h2 className='text-lg mt-3 font-bold'>Using Good Quality Materials</h2>
    <p className='text-lg '>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
    <h2 className='text-lg mt-3 font-bold'>Modern Fashion Design</h2>
    <p className='text-lg '>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
</div>
<div>
    <h2 className='text-lg mt-3 font-bold'>100% Handmade Products</h2>
    <p className='text-lg '>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
    <h2 className='text-lg mt-3 font-bold'>Discount for Bulk Orders</h2>
    <p className='text-lg '>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
</div></div>
<div className='flex justify-between lg space-x-5'>
<div><Image src={feature} alt='feature' className='bg-gray-100' height={7500} width={800}/></div>
<div>
  <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
  <div>
    <Button className="m-0">See all products</Button>
  </div>
</div></div>



    </div></div> 
  )
}
