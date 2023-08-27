"use client"
import { oneProductType } from '@/utils/ProductsDataArrayAndType'
import React, { useState } from 'react'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { imagesType } from '@/utils/ProductsDataArrayAndType'
import { FC } from 'react'
import { client } from '@/lib/sanityClient'
import Quantity from '@/utils/Quantity'
import AddtoCart from '@/components/ui/AddtoCart'
import Productscare from '@/Sections/Productscare'


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}

export const ProductDetail:FC < {item:oneProductType}>=({item}) => {
    const [ImageforPreviewofSelector, setImageforPreviewofSelector] = useState<string>(item.Image[0]._key)
  return (
    <div className='font-bold'>
        <div><div className='flex flex-col md:flex-row lg:flex-row items-center justify-between'>
            <div className='flex justify-evenly items-center'>
                {
                item.Image.map((subItem:imagesType,index:number)=>(
                    <div className='w-[28rem]' onClick={()=>setImageforPreviewofSelector(subItem._key)}>
                        <Image width={2000} height={2000} src={urlFor(subItem).height(2000).width(2000).url()} alt={subItem.alt}/>
                    </div>
                ))
                }
                
            </div>
           <div className='space-y-2'>
            <div>
                <h1>{item.ProductName}</h1>
                <h2 className='text-gray-700'>{item.productTypes}</h2>
            </div>
            <div className='mt-3'>
                <p>SELECT SIZE</p>
                <div className='flex gap-4'>
                    {item.size.map((subItem:string,index:number)=>(
                        <div className='cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center'>{subItem}</div>
                    ))}
                </div>
            </div>
            <div> <p>QUANTITY</p> <Quantity/></div>
            <div className='flex items-center gap-x-5 text-2xl font-bold'><AddtoCart/><p>${item.Price}</p></div>
            
            
            </div>  </div>
           
        </div>
        <Productscare/>
    </div>
  )
}
