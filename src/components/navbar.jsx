import React from "react";
import { FaFacebookF } from "react-icons/fa";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // // const toggleMenu = () => {
  // //     setIsOpen(!isOpen);
  // // }

  return (
    // <section className='border-solid mt-0 pt-0 flex bg-inherit w-full justify-center items-center h-20'>
    //     <div className='w-full md:w-3/5 bg-inherit rounded-lg'>
    //         <nav className={`flex w-full bg-blue-300 mt-20 border-solid border-1 border-black justify-between ${isOpen ? '' : 'rounded-full'} p-5`}>
    //             <div className='logo'>
    //                 RINGO
    //             </div>

    //             {/* Hamburger Menu for Mobile */}
    //             <div className='md:hidden'>
    //                 <button
    //                     className='focus:outline-none'
    //                     onClick={toggleMenu}
    //                 >
    //                     <svg
    //                         className='w-6 h-6'
    //                         fill='none'
    //                         stroke='currentColor'
    //                         viewBox='0 0 24 24'
    //                         xmlns='http://www.w3.org/2000/svg'
    //                     >
    //                         <path
    //                             strokeLinecap='round'
    //                             strokeLinejoin='round'
    //                             strokeWidth='2'
    //                             d={
    //                                 isOpen
    //                                     ? 'M6 18L18 6M6 6l12 12'
    //                                     : 'M4 6h16M4 12h16M4 18h16'
    //                             }
    //                         />
    //                     </svg>
    //                 </button>
    //             </div>

    //             {/* Menu Items */}
    //             <div className={`flex ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto md:space-x-6`}>
    //                 <ul className='flex flex-col md:flex-row'>
    //                     <li className='mx-6 cursor-pointer'>
    //                         <a href='/'>Home</a>
    //                     </li>
    //                     <li className='mx-6'>
    //                         <a href='/'>About</a>
    //                     </li>
    //                     <li className='mx-6'>
    //                         <a href='/'>Skills</a>
    //                     </li>
    //                     <li className='mx-6'>
    //                         <a href='/'>Experience</a>
    //                     </li>
    //                     <li className='mx-6'>
    //                         <a href='/'>Projects</a>
    //                     </li>
    //                     <li className='mx-6'>
    //                         <a href='/'>Contact</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     </div>
    // </section>
    <>
      <div className="navbar border shadow-lg rounded-xl mt-2 w-full bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={2}
              className="menu menu-sm dropdown-content border mt-5 z-[1] ml-0 p-3 shadow-lg bg-base-100 rounded-box w-80"
            >
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">SKILLS</a>
              </li>

              <li>
                <a href="/">PROJECTS</a>
              </li>

              <li>
                <a href="/">CONTACT</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/" className="btn btn-ghost text-xl">
            RINGO
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaFacebookF />
          </button>
          <button title="Download CV" className="btn btn-ghost bg-sky-500 hover:bg-sky-700 w-30 ml-2 text-xs">
            {/* <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>


              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div> */}
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
