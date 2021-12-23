import React, { useEffect, useState } from 'react'
import eagle_pic from '../img/eagle.jpg';
import throne_pic from '../img/throne.jpg';
var ReactRotatingText = require('react-rotating-text');

function Home() {
    const [xEagle, setXEagle] = useState(0);  
    const [yEagle, setYEagle] = useState(0);

    const [xThrone, setXThrone] = useState(0);  
    const [yThrone, setYThrone] = useState(0);

    function showEagle(e) {
        document.getElementById("eagle_img").classList.add("visible")
        setXEagle(e.clientY-document.getElementById("eagle_img").height-20+window.pageYOffset);
        setYEagle(e.clientX-100);
    }

    function hideEagle(e) {
        document.getElementById("eagle_img").classList.remove("visible")
    }

    function showThrone(e) {
        document.getElementById("throne_img").classList.add("visible")
        setXThrone(e.clientY-document.getElementById("throne_img").height-20+window.pageYOffset);
        setYThrone(e.clientX-90);
    }

    function hideThrone(e) {
        document.getElementById("throne_img").classList.remove("visible")
    }
    
    return (
        <div>
            <div className='mx-auto min-h-full w-11/12 md:w-9/12'>
                <div className='w-full'>
                    <h1 className='mt-14 text-4xl font-bold text-primary dark:text-dark_primary'>Hello!</h1>
                    <h3 className="my-5 text-xl text-secondary dark:text-dark_secondary h-8">
                        You must be here to learn about my <ReactRotatingText items={['education.', 'past projects.', 'work experience.', 'contact info.']} pause={1000} />
                    </h3>
                    <br />
                    <h2 className="my-5 text-2xl font-bold text-primary dark:text-dark_primary">First, let me tell you a little about myself...</h2>
                    <h4 className="text-xl text-secondary dark:text-dark_secondary leading-[140%]">
                        I am a driven and solution-oriented Computer Scientist and Mathematician with a rapidly expanding repertoire of professional skills. 
                        I have developed a proficiency in numerous programming languages including Java, JavaScript, Python and C. Additionally, I have used my 
                        experience as an 
                        
                        <span className='text-accent cursor-pointer dark:text-dark_accent' onMouseEnter={showThrone} onMouseMove={showThrone} onMouseLeave={hideThrone}> Lead IT Technician </span>

                        to develop strong communication, teamwork, and customer service skills. In my free time, I volunteer as an Assistant Scout Master for 
                        Troop 261, my local Boy Scout troop, where I achieved the rank of 
                        
                        <span className='text-accent cursor-pointer dark:text-dark_accent' onMouseEnter={showEagle} onMouseMove={showEagle} onMouseLeave={hideEagle}> Eagle Scout</span>

                        . I am excited and prepared to enter the industry and get hands-on experience in programming, information security, and networking.
                    </h4>
                </div>
            </div>
            <img id="eagle_img" className="absolute border-2 border-black rounded-2xl h-[200px] w-auto opacity-0 transition-opacity duration-500 pointer-events-none" src={eagle_pic} alt="Eagle Scout Uniform" style={{top: xEagle, left: yEagle}} />
            <img id="throne_img" className="absolute border-2 border-black rounded-2xl h-[260px] w-auto opacity-0 transition-opacity duration-500 pointer-events-none" src={throne_pic} alt="Sitting on my IT throne" style={{top: xThrone, left: yThrone}} />
        </div>
        
    )
}

export default Home
