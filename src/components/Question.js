import React from 'react'

function Question(props) {
  return (
    <div className='flex mb-4 justify-between border-b border-[#D434FE]'>
        <div className='w-[97%] h-full flex items-end '>
        <p className='text-white font-[montserrat] text-sm'>{props.text}</p>
        </div>
        <div className='w-[3%] flex justify-start '>
        <span className='w-full text-right text-[#D434FE]'>+</span>
        </div>
    </div>
  )
}

export default Question
