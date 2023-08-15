
import { oneProductType } from "@/utils/ProductsDataArrayAndType";
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import React, { FC } from 'react'
import { client } from '../../../sanity/lib/client';
import Link from 'next/link';
 const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}


const Cardss: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
    console.log(singleProductData)
    return (

        <div className='max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300'>
            <div className='relative w-full'>
                <div className='absolute inset-0 z-10' />

                {/* <Image src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt={singleProductData.image[0].alt} /> */}

                {singleProductData.image && singleProductData.image.length > 0 ? (
        <Image
          src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()}
          alt={singleProductData.image[0].alt}
          width={1000}
          height={1000}
        />
      ) : (
        <p>No images available</p>
      )}
            </div>


            
            <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
               
                    <h6>{singleProductData.productName}</h6>
                    <p>${singleProductData.price}</p>
                
            </div>
        </div>
    )
}

export default Cardss