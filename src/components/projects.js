import React from 'react'
import projectData from '../data/projects.json'

function Projects() {
    return (
        <div className='mx-auto min-h-full w-full px-10 mt-14'>
            <h1 className='text-2xl text-primary dark:text-dark_primary'>Take a look at some of the projects I have worked on:</h1>
            {projectData.projects.map((e) => {
                return (
                    <div className='card md:card-side bg-foreground dark:bg-dark_foreground mt-10 drop-shadow-xl'>
                        <div className='card-body'>
                            <h2 className='card-title text-primary dark:text-dark_primary'>{e.name}</h2>
                            <p className='text-secondary dark:text-dark_secondary'>{e.description}</p>
                            <div className='card-actions'>
                                <a className='btn' href={e.link} target="_blank" rel="noreferrer">Source</a>
                            </div>
                        </div>
                    </div>
                )
            })}
            <br />
            <br />
        </div>
    )
}

export default Projects