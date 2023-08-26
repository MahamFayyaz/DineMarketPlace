"use client"
import { oneProductType } from '@/utils/ProductsDataArrayAndType'
import React from 'react'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { imagesType } from '@/utils/ProductsDataArrayAndType'
import { FC } from 'react'
import { client } from '@/lib/sanityClient'


const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}

export const ProductDetail:FC < {item:oneProductType}>=({item}) => {
    console.log(item)
  return (
    <div>
        <div>
            <div>
                {
                item.Image.map((item:imagesType,index:number)=>(
                    <div className='w-28'>
                        <Image width={2000} height={2000} src={urlFor(item).height(2000).width(2000).url()} alt={item.alt}/>
                    </div>
                ))
                }
            </div>
        </div>
    </div>
  )
}
