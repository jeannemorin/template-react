import React from 'react';
// components

import HeaderTopTwoColors from './components/Header_Nav/HeaderTopTwoColors';
import FooterSimple from './components/Footer/FooterSimple';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <HeaderTopTwoColors />
      <div className='h-[4000px]'/>
      <FooterSimple />
    </div>
  );
};

export default App;
