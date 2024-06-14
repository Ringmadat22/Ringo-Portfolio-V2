import React from 'react'

function navbar() {
  return (
    <section className='border-solid flex bg-inherit justify-center items-center h-20 p-15'>
        <div>
            <nav className='flex w-70 bg-blue-300 mt-20 border-solid border-1 border-black justify-between rounded-3xl p-5'>
                <div className='logo'>RINGO</div>
                <div className='right-nav'>
                    <ul className='flex'>
                        <li>
                            <a href='/'>Home</a>
                        </li>

                        <li>
                            <a href='/'>About</a>
                        </li>

                        <li>
                            <a href='/'>Skills</a>
                        </li>

                        <li>
                            <a href='/'>Experiece</a>
                        </li>

                        <li>
                            <a href='/'>Projects</a>
                        </li>

                        <li>
                            <a href='/'>Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </section>
  )
}

export default navbar