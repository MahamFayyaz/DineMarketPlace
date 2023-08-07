import React from 'react'
import prom1 from '/public/promotion01.webp'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import prom2 from '/public/promotion03.webp'
import prom3 from '/public/promotion04.webp'
export default function Promotions() {
  return (
   <main>
    <div className="max-w-7xl mx-auto mt-16">
<p className='text-blue-700 font-bold text-center'>PROMOTIONS</p>
<p className='text-black font-bold text-2xl lg:text-3xl text-center pt-3'>Our Promotion Events</p>
    </div>

<div className='flex space-x-5 flex-col lg:flex-row gap-y-10 mt-10 '>
<div>
     <div className='flex flex-wrap bg-gray-200  items-center px-10 hover:scale-110'>
            <div >
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            GET UP TO <br/><span className='font-bold'>60%</span>  </h2>
            <p>For the summer<br/> reason</p>
            </div>
            <div>
                <Image src={prom1} alt='promotion01' className='hidden lg:inline-flex'/>
            </div>
    </div> 
    <div className='bg-gray-900 text-white text-center py-10 mt-5 hover:scale-110'>
        <h2 className="scroll-m-20  pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0">
            GET 30% OFF </h2>
            <p className='text-lg'>USE PROMO CODE</p>
            <Button className='bg-gray-500 mt-5 center font-bold text-lg'>DINEWEEKENDSALE</Button>
    </div>
</div>

<div className='flex flex-col lg:flex-row gap-y-10  '>
    <div className='bg-red-200 pt-3 px-3 hover:scale-110'>
    <p>Flex Sweatshirt</p>
    <p className='relative line-through'>$100.00</p><span className='font-semibold'> $75.00</span>
    <Image src={prom2} alt='promotion2'/>
    </div>
    <div className='bg-gray-200  pt-3 px-3 hover:scale-110'>
    <p>Flex Push Button Bomber</p>
    <p className='relative line-through'>$100.00</p><span className='font-semibold'> $75.00</span>
    <Image src={prom3} alt='promotion3'/>
    </div>
</div>
</div>




</main>
  )
}
