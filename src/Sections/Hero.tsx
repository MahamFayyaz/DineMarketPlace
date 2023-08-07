import React from 'react'
import Poster from '/public/girl.webp'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {ShoppingCart} from "lucide-react"
export default function Hero() {
  return (
   <section className='flex flex-col md:flex-row lg:flex-row gap-y-10 justify-between'>
    <div className='flex-1'>
    <Badge className='rounded-lg bg-blue-200 text-blue-800 py-3 px-5 text-md hover:bg-blue-200'>Sale 70%</Badge>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
     An Industrial Take on Streetwear
    </h1>



    
    <p className="leading-7 [&:not(:first-child)]:mt-6">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <div className='pt-10'>
      <Button className="m-0">
        <ShoppingCart className="mr-2 h-8 w-5" /> Start Shopping
      </Button></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <Image src={'/bazaar.webp'} alt='logo.png' height={110} width={100}/>
        <Image src={'/Bustle.webp'} alt='logo.png'height={110} width={100}/>
        <Image src={'/Versace.webp'} alt='logo.png' height={110} width={100}/>
        <Image src={'/InStyle.webp'} alt='logo.png' height={110} width={100}/>
      </div>
    </div>
    <div className='flex-1'>
      <Image src={Poster} alt='poster' className='bg-red-100 rounded-full '/>
    </div>
   </section>
  )
}
