import React from 'react';
import logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <button className='btn btn-sm px-4 py-2'>Связаться</button>
      </div>
    </div>

  </header>;
};

export default Header;
