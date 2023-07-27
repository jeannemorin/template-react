import React, {useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg';

const HeaderTopTwoColors = () => {

    const [header, setHeader] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });
    });

    return (
    <header className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-300`}>
            
            <div className='container mx-auto flex  flex-col items-center gap-y-6
            lg:flex-row lg:justify-between lg:gap-y-0'> 
                <a href='/'>
                    <img className='w-[160px]' src={Logo} alt='' />
                </a>

                <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 lg:gap-x-8
                tracking-[1px] items-center` }>
                        <a href='/' className='hover:text-accent transition'> Home</a>
                        <a href='/' className='hover:text-accent transition'> About</a>
                        <a href='/' className='hover:text-accent transition'> List</a>
                        <a href='/' className='hover:text-accent transition'> Cards</a>
                        <a href='/' className='hover:text-accent transition'> Contact</a>

                        <button className='btn btn-sm'>Action</button>
                </nav>
            </div>
        </header>
    )
};

export default HeaderTopTwoColors;