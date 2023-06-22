import React from 'react';
import { BiHomeAlt, BiUser} from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText} from 'react-icons/bs'

import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-white/50 text-2xl'>
          <Link to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active' smooth={true} spy={true} offset={-200}>
            <BiHomeAlt/>
          </Link> 
          <Link to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active' smooth={true} spy={true}>
            <BiUser/>
          </Link> 
          <Link to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active' smooth={true} spy={true}>
            <BsClipboardData/>
          </Link> 
          <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active' smooth={true} spy={true}>
            <BsBriefcase/>
          </Link>
          <Link to='contacts' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' activeClass='active' smooth={true} spy={true}>
            <BsChatSquareText/>
          </Link> 
        </div>

      </div>
    </nav>
  )
};

export default Nav;
