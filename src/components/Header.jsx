import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
          <img src={logo} alt="logo" />
        <a href="https://t.me/gudkovsky" className='btn btn-sm px-6 py-4 flex hover:scale-110 items-center justify-center text-[20px] transition duration-1000' target='_blank' rel='noreferrer'>Связаться</a>
      </div>
    </div>
  </header>;
};

export default Header;
