import React from 'react';

function Navbar() {
  return (
    <section className='border-solid mt-0 pt-0 flex bg-inherit w-full justify-center items-center h-20 '>
      <div className='w-3/5  bg-inherit  rounded-lg '>
        <nav className='flex w-full bg-blue-300 mt-20 border-solid border-1 border-black justify-between rounded-full p-5'>
          <div className='logo'>RINGO</div>
          <div className='right-nav'>
            <ul className='flex'>
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
