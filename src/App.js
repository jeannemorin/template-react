import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header_Nav/HeaderNoMenu';
import Nav from './components/Header_Nav/NavOnePageBottom';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import HeaderTopTwoColors from './components/Header_Nav/HeaderTopTwoColors';
import NavOnePageBottom from './components/Header_Nav/NavOnePageBottom';
import HeaderNoMenu from './components/Header_Nav/HeaderNoMenu';
import FooterMenu from './components/Footer/FooterMenu';
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
