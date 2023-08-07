import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.png'
import { FacebookIcon,TwitterIcon,LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
    <div className='flex flex-col lg:flex-row mt-20 justify-between '>
        <div  className='space-y-3'>
            <div><Image src={logo} width={180} height={30} alt='logo' /></div>
            <div><p>Small, artisan label that offers a<br/> thoughtfully curated<br/> collection of high quality<br/> everyday essentials made.</p></div>
            <div className='flex space-x-2'>
            <div className=' bg-gray-300 rounded'><TwitterIcon size={20} /></div>
            <div className=' bg-gray-300 rounded'><FacebookIcon size={20} /></div>
            <div className=' bg-gray-300 rounded'><LinkedinIcon size={20} /></div>
            </div>
        </div>

        <div className='space-y-3'>
        <h3 className='text-gray-700 font-bold text-lg'>Company</h3>
          <ul className='space-y-3'>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='space-y-3'>
        <h3 className='text-gray-700 font-bold text-lg'>Support</h3>
          <ul className='space-y-3'>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='space-y-3'>
        <h3 className='text-gray-700 font-bold text-lg'>Contact</h3>
          <ul className='space-y-3'>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
    </div>
    <hr className="border-t-2 border-gray-900 my-8" />

<div className='mt-10 text-gray-800 flex flex-col lg:flex-row justify-between'>
<p>Copyright © 2022 Dine Market</p>
<p>Design by. <span className='text-lg font-bold'>Weird Design Studio</span></p>
<p>Code by. <span className='text-lg font-bold'>Maham Fayyaz</span></p>
</div></footer>
    
  )
}
      

    //    */}
  

export default Footer