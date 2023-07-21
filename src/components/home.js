import React, { useState } from 'react'
import throne_pic from '../img/throne.jpg'
var ReactRotatingText = require('react-rotating-text')

function Home() {
	const [xThrone, setXThrone] = useState(0)
	const [yThrone, setYThrone] = useState(0)

	function showThrone(e) {
		document.getElementById('throne_img').classList.add('visible')
		setXThrone(
			e.clientY -
				document.getElementById('throne_img').height -
				20 +
				window.pageYOffset
		)
		setYThrone(e.clientX - 90)
	}

	function hideThrone(e) {
		document.getElementById('throne_img').classList.remove('visible')
	}

	return (
		<div>
			<div className='mx-auto min-h-full w-11/12 md:w-9/12'>
				<div className='w-full'>
					<h1 className='mt-14 text-5xl text-primary dark:text-dark_primary home'>
						Hello!
					</h1>
					<h3 className='my-5 text-xl text-secondary dark:text-dark_secondary h-8'>
						You must be here to learn about my{' '}
						<ReactRotatingText
							items={[
								'education.',
								'projects.',
								'work experience.',
							]}
							pause={1000}
						/>
					</h3>
					<br />
					<h2 className='my-5 text-3xl text-primary dark:text-dark_primary home'>
						First, let me tell you a little about myself...
					</h2>
					<h4 className='text-xl text-secondary dark:text-dark_secondary leading-[140%]'>
						I am a driven and solution-oriented developer with a
						rapidly expanding repertoire of professional skills. I
						have developed a proficiency in numerous programming
						languages including Python, Java, and JavaScript.
						Additionally, I have used my experience as an
						<span
							className='text-accent cursor-pointer dark:text-dark_accent'
							onMouseEnter={showThrone}
							onMouseMove={showThrone}
							onMouseLeave={hideThrone}
						>
							{' '}
							Lead IT Technician{' '}
						</span>
						to develop strong communication, teamwork, and customer
						service skills. I am excited and prepared to enter the
						industry and get some hands-on experience.
					</h4>
					<br />
				</div>
			</div>
			<img
				id='throne_img'
				className='absolute border-2 border-black rounded-2xl h-[260px] w-auto opacity-0 transition-opacity duration-500 pointer-events-none'
				src={throne_pic}
				alt='Sitting on my IT throne'
				style={{ top: xThrone, left: yThrone }}
			/>
		</div>
	)
}

export default Home
