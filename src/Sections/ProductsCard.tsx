import React from "react";
import Link from "next/link";
import Image from "next/image";
import AddtoCart from "@/components/ui/AddtoCart";
import { StaticImageData } from "next/image";
export default function ProductsList(props: {
  title: string;
  price: number;
  image: StaticImageData;
  category: string;
  id: number;
}) {
  return (
    <Link href={`/allproducts/${props.id}`}>
      <div>
        <Image
          src={props.image}
          alt="product"
          className="bg-gray-100 h-500 w-450 gap-y-10"
        />
        <h2 className="text-lg mt-3">{props.title}</h2>
        <p className="text-lg font-bold">${props.price}</p>
        {/* <p className='text-lg font-bold'>Category:<span className='text-base font-normal capitalize'>{props.category}</span></p> */}

        {/* <AddtoCart/> */}
      </div>
    </Link>
  );
}
