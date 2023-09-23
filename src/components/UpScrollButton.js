import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Link } from 'react-scroll';

function UpScrollButton() {
  return (
    <Link smooth={true} to='Home' duration={500} className='px-2 py-4 bg-[transparent] border border-violet-800 rounded-md cursor-pointer hover:bg-violet-900'>
        <ArrowCircleUpIcon className='text-white' />
    </Link>
  )
}

export default UpScrollButton