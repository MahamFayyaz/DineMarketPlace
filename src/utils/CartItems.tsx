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
export default function CartItems() {
    const cartValue = useSelector((state: RootState) => state.CounterSlice.totalQuantity);
  return (
    <div className='hidden lg:inline-flex h-10 w-10 bg-gray-300 rounded-full  justify-center items-center relative'>
    <span className='absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center'>{cartValue}</span>
    <ShoppingCart/>
            </div>
  )
}
