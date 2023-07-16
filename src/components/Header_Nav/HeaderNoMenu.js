import React from 'react';

import Logo from '../../assets/logo.svg';
const HeaderNoMenu = () => {
  return <div className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='' />
        </a>

        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </div>;
};

export default HeaderNoMenu;
