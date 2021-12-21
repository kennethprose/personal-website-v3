import React from 'react'
import { Link } from 'react-router-dom';
import Dark from './dark';

function Navbar() {
    return (  
        <div class="navbar mx-3 mb-2 rounded-box bg-navbar dark:bg-dark_navbar">
            <div class="flex-initial md:flex-1 px-2">
                <div class="dropdown md:hidden">
                    <div tabindex="0" class="btn btn-ghost rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div> 
                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <Link to="/">
                            <li><a>Home</a></li> 
                        </Link>
                        <Link to="/projects">
                            <li><a>Projects</a></li> 
                        </Link>
                        <Link to="/experience">
                            <li><a>Experience</a></li> 
                        </Link>
                        <Link to="/contact">
                            <li><a>Contact</a></li> 
                        </Link>
                    </ul>
                </div>
                <a class="text-lg font-bold">Kenneth Rose</a>
            </div>
            <div className='md:flex justify-center hidden'>
                <Link to="/">
                    <div className='btn btn-ghost'>Home</div>
                </Link>
                <Link to="/projects">
                    <div className='btn btn-ghost'>Projects</div>
                </Link>
                <Link to="/experience">
                    <div className='btn btn-ghost'>Experience</div>
                </Link>
                <Link to="/contact">
                    <div className='btn btn-ghost'>Contact</div>
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
