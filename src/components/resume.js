import React from 'react'
import { Download } from 'react-bootstrap-icons'
import myResume from '../docs/Kenneth_Rose_Resume.pdf'
import coursesData from '../data/courses.json'

function Resume() {
	return (
		<div className='mx-auto min-h-full w-full px-3 mt-14'>
			<div className='flex gap-2 items-center justify-between'>
				<h1 className='px-2 text-3xl text-primary dark:text-dark_primary resume_title'>
					Resume
				</h1>
				<div
					className='tooltip tooltip-info tooltip-left'
					data-tip='View/Download Resume'
				>
					<div className='btn btn-ghost btn-circle'>
						<a href={myResume} target='_blank' rel='noreferrer'>
							<Download className='text-2xl text-primary dark:text-dark_primary' />
						</a>
					</div>
				</div>
			</div>
			<div class='divider before:bg-slate-200 after:bg-slate-200 dark:before:bg-slate-800 dark:after:bg-slate-800'></div>
			<h1 className='px-2 text-3xl text-center text-primary dark:text-dark_primary my-8 resume_title'>
				Education
			</h1>
			<h1 className='px-2 text-xl text-primary dark:text-dark_primary'>
				B.S. Computer Science, Applied Mathematics and Statistics
			</h1>
			<h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
				<a
					className='underline decoration-secondary decoration-dotted'
					href='https://www.stonybrook.edu/'
					target='_blank'
					rel='noreferrer'
				>
					Stony Brook University
				</a>
				, 2022
			</h1>
			<h1 className='px-2 text-lg text-primary dark:text-dark_primary mt-6 mb-3'>
				Notable Courses:
			</h1>
			{coursesData.courses.map((e) => {
				return (
					<div class='collapse border rounded-box border-secondary collapse-arrow mb-1'>
						<input type='checkbox' />
						<div class='collapse-title text-lg text-primary dark:text-dark_primary'>
							{e.name}
						</div>
						<div class='collapse-content text-md text-secondary dark:text-dark_secondary'>
							<p>
								{e.description}
								<br />
								<br />
								<a
									className='underline decoration-secondary decoration-dotted'
									href={e.link}
									target='_blank'
									rel='noreferrer'
								>
									More info
								</a>
							</p>
						</div>
					</div>
				)
			})}
			<br />
			<h1 className='px-2 text-3xl text-center text-primary dark:text-dark_primary my-8 resume_title'>
				Work History
			</h1>
			<h1 className='px-2 text-xl text-primary dark:text-dark_primary'>
				IT Specialist
			</h1>
			<h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
				BOSS Facility Services
			</h1>
			<h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
				January 2022 - Present
			</h1>
			<br />
			<h1 className='px-2 text-lg text-primary dark:text-dark_primary'>
				Responsibilities
			</h1>
			<ul className='list-disc list-inside pl-3 text-secondary dark:text-dark_secondary opacity-80'>
				<li>Develop software to streamline company processes</li>
				<li>
					Completed a successful migration of 80 users and 3 servers
					to Azure
				</li>
				<li>Manage O365, Exchange, MDM, etc.</li>
			</ul>
			<br />
			<br />
			<h1 className='px-2 text-xl text-primary dark:text-dark_primary'>
				Lead IT Technician / Workbench Manager
			</h1>
			<h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
				Stony Brook University Campus Residences
			</h1>
			<h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
				September 2019 - August 2021
			</h1>
			<br />
			<h1 className='px-2 text-lg text-primary dark:text-dark_primary'>
				Responsibilities
			</h1>
			<ul className='list-disc list-inside pl-3 text-secondary dark:text-dark_secondary opacity-80'>
				<li>
					Managed team performance by training, motivating, and
					directing 20 employees.
				</li>
				<li>
					Assist a campus of 26,000 staff and students via telephone,
					email, help desk tickets, in-person visits, and remote
					access.
				</li>
			</ul>
			<br />
			<h1 className='px-2 text-3xl text-center text-primary dark:text-dark_primary my-8 resume_title'>
				Awards
			</h1>
			<h1 className='px-2 text-xl text-primary dark:text-dark_primary'>
				Eagle Scout
			</h1>
			<h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
				Boy Scouts of America
			</h1>
			<h1 className='px-2 text-lg text-secondary dark:text-dark_secondary opacity-80'>
				December 2017
			</h1>
			<div className='flex justify-center my-12'>
				<div className='btn text-white'>
					<a href={myResume} target='_blank' rel='noreferrer'>
						View / Download Resume
					</a>
				</div>
			</div>
		</div>
	)
}

export default Resume
