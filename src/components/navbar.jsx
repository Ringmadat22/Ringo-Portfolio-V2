import React from 'react'

function navbar() {
  return (
    <section className='border-solid '>
        <div>
            <nav>
                <div className='logo'>RINGO</div>
                <div className='right-nav'>
                    <ul>
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