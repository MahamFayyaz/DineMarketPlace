import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import React, { FC } from 'react'
import { oneProductType } from '@/utils/ProductsDataArrayAndType';
import { client } from '../../../sanity/lib/client';
import Link from 'next/link';
import AddtoCart from '@/components/ui/AddtoCart';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}


const Cardss: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
    return (
        <Link href={`/catalog/${singleProductData.slug.current}`}>
        <div className=' max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-110 duration-300'>
            <div className='relative w-full'>
                <div className='absolute inset-0 z-10' />
                <Image width={1000} height={1000} src={urlFor(singleProductData.Image[0]).width(500).height(500).url()} alt={singleProductData.Image[0].alt} />
            </div>
            <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>
               
                    <h2>nxx{singleProductData.ProductName}</h2>
                    <p>${singleProductData.Price}</p>
                
            </div> 
        </div></Link>
    )
}

export default Cardss