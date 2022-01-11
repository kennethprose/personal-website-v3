import React from 'react'
import { Github } from 'react-bootstrap-icons'
import projectData from '../data/projects.json'

function Projects() {
    return (
        <div className='mx-auto min-h-full w-full px-3 mt-14'>
            <h1 className='px-2 text-3xl text-primary dark:text-dark_primary'>Check out some of my work!</h1>
            <div class="divider before:bg-slate-200 after:bg-slate-200 dark:before:bg-slate-800 dark:after:bg-slate-800"></div>
            {projectData.projects.map((e) => {
                return (
                    <div className='card md:card-side bg-foreground dark:bg-dark_foreground mt-10 md:drop-shadow-lg h-fit'>
                        <figure className='self-center'>
                            <img className='md:max-h-80' src={e.img} />
                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title text-primary dark:text-dark_primary'>{e.name}</h2>
                            <p className='text-secondary dark:text-dark_secondary'>{e.description}</p>
                            <div className='card-actions h-full'>
                                <a className='btn self-end' href={e.link} target="_blank" rel="noreferrer"><Github className='text-xl' />&nbsp;&nbsp;Source</a>
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