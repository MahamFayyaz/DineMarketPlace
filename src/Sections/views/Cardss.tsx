"use client"
import Image from 'next/image';

import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanityClient';
import React from 'react'
import { oneProductType } from "@/utils/ProductsDataArrayAndType";
import { FC } from 'react';
const builder = imageUrlBuilder(client);
function urlFor(source: string) {
    return builder.image(source)
  }
const Cardss:FC<{singleProductData:oneProductType}>= ({singleProductData}) => {
  
  return (
    <div className='border-4'>
<Image src={urlFor(singleProductData.image[0]).width(200).url()} alt='dd' width={100} height={100}/>
    </div>
  )
}
export default Cardss 