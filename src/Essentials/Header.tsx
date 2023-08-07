'use client'

import { useSelector} from 'react-redux'
import { cartActions } from '@/store/slice/CartSlice';
import CounterSlice from '@/store/slice/CartSlice';
import { RootState } from '@/store/store';
import React,{useState} from 'react'
import logo from '/public/logo.png';
import Image from 'next/image'
import Link from 'next/link';
import {ShoppingCart,SearchIcon} from 'lucide-react'
import { Input } from "@/components/ui/input"
import { XIcon } from 'lucide-react';

import { MenuIcon } from 'lucide-react';
import CartItems from '@/utils/CartItems';

const Header=()=> {

  const cartValue = useSelector((state: RootState) => state.CounterSlice.totalQuantity);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)}
  return (
    <nav>
    <div className='flex justify-between  items-center py-6 px-20'>
    <Link href={'/'}><Image src={logo} alt='logo here'/></Link>
        <ul className='hidden lg:inline-flex gap-x-10'>
            <li className='text-lg'><Link href={'/Category/female'}>Female</Link></li>
            <li className='text-lg'><Link href={'/Category/male'}>Male</Link></li>
            <li className='text-lg'><Link href={'/Category/kids'}>Kids</Link></li>
            <li className='text-lg'><Link href={'/allproducts'}>All Products</Link></li>
        </ul>
        <div className='hidden lg:inline-flex justify-center items-center'>
        <SearchIcon/>
        <Input type='text' placeholder='What are you looking for?'/></div>
        <div><CartItems/></div>
       
        <button
              onClick={toggleMenu}
                className="text-black hover:text-white focus:outline-none focus:text-white lg:hidden"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
              </button>
    </div>
    {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 text-center  space-y-1 sm:px-3">
          <div><CartItems/></div>
            <ul>
           
          <li className='text-lg '><Link href={'/Category/female'}>Female</Link></li>
            <li className='text-lg'><Link href={'/Category/male'}>Male</Link></li>
            <li className='text-lg'><Link href={'/Category/kids'}>Kids</Link></li>
            <li className='text-lg'><Link href={'/allproducts'}>All Products</Link></li></ul>
          </div>
        </div>
      )}
  
    </nav>

    
  )
}
export default Header;