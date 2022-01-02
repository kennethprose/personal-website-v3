import React from 'react'
import coursesData from '../data/courses.json'

function Resume() {
    return (
        <div className='mx-auto min-h-full w-full px-3 mt-14'>
            <h1 className='px-2 text-3xl text-primary dark:text-dark_primary'>Resume</h1>
            <div class="divider before:bg-slate-200 after:bg-slate-200 dark:before:bg-slate-800 dark:after:bg-slate-800"></div>
            <br />
            <h1 className='px-2 text-2xl text-center text-primary dark:text-dark_primary'>Education</h1>
            <br />
            <h1 className='px-2 text-xl text-primary dark:text-dark_primary'>B.S. Computer Science, Applied Mathematics and Statistics</h1>
            <h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
                <a className='underline decoration-secondary decoration-dotted' href='https://www.stonybrook.edu/' target="_blank" rel="noreferrer">Stony Brook University</a>
                , 2021
            </h1>
            <br />
            <h1 className='px-2 text-lg text-primary dark:text-dark_primary'>Notable Courses:</h1>
            <br />
            {coursesData.courses.map((e) => {
                return (
                    <div class="collapse border rounded-box border-secondary collapse-arrow mb-1">
                        <input type="checkbox" /> 
                        <div class="collapse-title text-lg text-primary dark:text-dark_primary">{e.name}</div>
                        <div class="collapse-content text-md text-secondary dark:text-dark_secondary"> 
                            <p>
                                {e.description}<br /><br />
                                <a href={e.link} target="_blank" rel="noreferrer">More info</a>
                            </p>
                        </div>
                    </div>
                )
            })}
            <br />
            <br />
            <h1 className='px-2 text-2xl text-center text-primary dark:text-dark_primary'>Work History</h1>
            <br />
            <h1 className='px-2 text-xl text-primary dark:text-dark_primary'>Lead IT Technician / Workbench Manager</h1>
            <h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>Stony Brook University Campus Residences</h1>
            <h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>September 2019 - August 2021</h1>
            <br />
            <h1 className='px-2 text-lg text-primary dark:text-dark_primary'>Responsibilities</h1>
            <ul className='list-disc list-inside pl-3 text-secondary dark:text-dark_secondary opacity-80'>
                <li>Assist staff and students via telephone, email, help desk tickets, in-person visits, and remote access.</li>
                <li>Install, upgrade, troubleshoot and repair desktop computers, laptops, phones, IoT devices, etc.</li>
                <li>Managed team performance by training, motivating, and directing 20 employees.</li>
                <li>Document newly formed procedures and update existing documentation.</li>
            </ul>
            <br />
            <br />
        </div>
    )
}

export default Resume
