import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section className='border-solid mt-0 pt-0 flex bg-inherit w-full justify-center items-center h-20'>
            <div className='w-full md:w-3/5 bg-inherit rounded-lg'>
                <nav className={`flex w-full bg-blue-300 mt-20 border-solid border-1 border-black justify-between ${isOpen ? '' : 'rounded-full'} p-5`}>
                    <div className='logo'>
                        RINGO
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className='md:hidden'>
                        <button
                            className='focus:outline-none'
                            onClick={toggleMenu}
                        >
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d={
                                        isOpen
                                            ? 'M6 18L18 6M6 6l12 12'
                                            : 'M4 6h16M4 12h16M4 18h16'
                                    }
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className={`flex ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto md:space-x-6`}>
                        <ul className='flex flex-col md:flex-row'>
                            <li className='mx-6 cursor-pointer'>
                                <a href='/'>Home</a>
                            </li>
                            <li className='mx-6'>
                                <a href='/'>About</a>
                            </li>
                            <li className='mx-6'>
                                <a href='/'>Skills</a>
                            </li>
                            <li className='mx-6'>
                                <a href='/'>Experience</a>
                            </li>
                            <li className='mx-6'>
                                <a href='/'>Projects</a>
                            </li>
                            <li className='mx-6'>
                                <a href='/'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Navbar;
