import React from 'react';
import menuIcon from '../assets/MenuVector.png'
import RegisterBtn from './RegisterBtn';


const navItems = ["Timeline", "Overview", "FAQs", "Contact"]

function Navbar() {
  return (
    <nav className='w-full h-20 flex px-16 '>
        <div className='w-3/5 lg:w-2/5 flex items-center'>
            <div className='w-1/3'>
                <span className='text-white font-[ClashDisplay-Bold] lg:text-4xl text-xl cursor-pointer'>get</span>
                <span className='text-[#D434FE] font-[ClashDisplay-Bold] lg:text-4xl text-xl cursor-pointer'>linked</span>
            </div>
        </div>
        <div className='hidden lg:w-3/5 text-white lg:flex items-center justify-center gap-4'>
            {navItems.map((item, index) => (
                <div key={index} className='w-fit p-2 cursor-pointer hover:text-[#D434FE] transition-colors duration-300'>
                  <span className='text-base'>{item}</span>
                </div>
            ))}
            <div className="ml-14">
            <RegisterBtn text="Register"/>
            </div>
        </div>
        <div className='w-2/5 lg:hidden flex items-center justify-end'>
              <div className='w-6 h-6 object-contain overflow-hidden'>
                <img src={menuIcon} alt='menu' />
              </div>
        </div>

    </nav>
  )
}

export default Navbar

// 903AFF
// D434FE
// FE34B9