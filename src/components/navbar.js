import React from 'react'
import { Link } from 'react-router-dom';
import Dark from './dark';

function Navbar() {
    return (  
        <div class="navbar mx-3 mb-2 rounded-box bg-foreground dark:bg-dark_foreground drop-shadow-lg">
            <div class="flex-initial md:flex-1 px-2">
                <div class="dropdown md:hidden">
                    <div tabindex="0" class="btn btn-ghost rounded-btn text-black dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div> 
                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-navbar dark:bg-dark_navbar rounded-box w-52">
                        <Link to="/">
                            <li><a href='/#'>Home</a></li> 
                        </Link>
                        <Link to="/projects">
                            <li><a href='/#'>Projects</a></li> 
                        </Link>
                        <Link to="/experience">
                            <li><a href='/#'>Experience</a></li> 
                        </Link>
                        <Link to="/contact">
                            <li><a href='/#'>Contact</a></li> 
                        </Link>
                    </ul>
                </div>
                <a class="text-lg font-bold text-black dark:text-white"  href='/#'>Kenneth Rose</a>
            </div>
            <div className='md:flex justify-center hidden'>
                <Link to="/">
                    <div className='btn btn-ghost text-black dark:text-white'>Home</div>
                </Link>
                <Link to="/projects">
                    <div className='btn btn-ghost text-black dark:text-white'>Projects</div>
                </Link>
                <Link to="/experience">
                    <div className='btn btn-ghost text-black dark:text-white'>Experience</div>
                </Link>
                <Link to="/contact">
                    <div className='btn btn-ghost text-black dark:text-white'>Contact</div>
                </Link>
            </div>
            <div class="flex justify-end flex-1 px-2">
                <div class="flex items-stretch">
                    <Dark />
                </div>
            </div>
        </div>
    )
}

export default Navbar
