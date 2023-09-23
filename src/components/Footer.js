import React from 'react';
import footerContent1 from "../assets/footerContent1.png"
import footerContent2 from "../assets/footerContent2.png"

function Footer() {
  return (
   <div className=' bg-gradient-to-r from-[#180A31] to-[#110B21] bg-[#110B21] [#180A31]'>
    <div className='hidden lg:block'>
        <div className=' flex justify-center items-center'>
        <div className='w-full'><img src={footerContent1} alt='img' className='object-center w-full' /></div>
        </div>
    </div>
    <div className='lg:hidden'>
    <div className=' flex justify-center items-center'>
        <div className='w-full'><img src={footerContent2} alt='img' className='object-center w-full' /></div>
        </div>
    </div>
   </div>
  )
}

export default Footer